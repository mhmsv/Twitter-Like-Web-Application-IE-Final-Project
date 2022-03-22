from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework import status, views ,response , decorators ,permissions,authentication
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import *
from datetime import datetime
from twitter.models import Profile
# Create your views here

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SIGN-UP~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['POST', ])
def sign_up(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    emails = User.objects.filter(email = email)
    if emails.count() > 0 :
        return response.Response({"message" : "this username already exists !"})
    else :
        user = User.objects.create(username = username , password = password , email = email)
        Profile.objects.create(user=user)
        token,created = Token.objects.get_or_create(user=user)
        return response.Response({'message': "sign up successful" , "token"  : token.key},
                                status=status.HTTP_200_OK)
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Log-IN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['POST', ])
def log_in(request):
    user = request.user
    password = request.data.get('password')
    email = request.data.get('email')
    username = request.data.get('username')
    user = authenticate(username=username, password=password)
    if not user:
        return response.Response({"message" : "username or password is wrong !"},status=status.HTTP_403_FORBIDDEN)
    token,created = Token.objects.get_or_create(user=user)
    return response.Response({'message': "signed in successfully" , "token" : token.key },status=status.HTTP_200_OK)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~create-tweets~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#????????????????????????????????????????????????????????????????????????????????????????????
@decorators.api_view(['POST', ])
def create_tweet(request):
    username = request.data.get('username')
    media = request.FILES.get('file')
    text = request.data.get('tweet')
    if len(text) > 0:
        tweet = Tweet.objects.create(user = username , media = media , tweet = text)
        return response.Response({'message': "tweeted successful"},status=status.HTTP_200_OK)
    else:
        return response.response({"message" : "there is a problem !"})
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Get-Tweet-for-profile~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['GET', ])
def get_tweet(request):
    user = request.user
    tweets = Tweet.objects.filter(user = user).order("-date")
    all_tweets = []
    for t in tweets :
        all_tweets.append({
            'id' : t.id,
            "user" : t.user,
            "text" : t.tweet,
            "like_counts" : t.likes,
            "meida" : str(t.media),
            "retweet_counts" : t.retweetNum
            
        })
    
    return response.Response({"result"  : all_tweets} , status = status.HTTP_200_OK)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Get-Tweet-for-Home~~~~~~~~~~~~~~~~~~~~~~~~~~
#?????????????????????????????????????????????????????????????????????????????????????
@decorators.api_view(['POST', ])
@decorators.authentication_classes([authentication.TokenAuthentication, ])
@decorators.permission_classes([permissions.IsAuthenticated, ])
def get_tweets_home(request):
    user = request.user
    print(user)
    try : 
        profile = Profile.objects.get(user=user)
        print(profile)
    except Profile.DoesNotExist :
        return response.Response(status=status.HTTP_404_NOT_FOUND)

    following_ids = []
    follows = Follow.objects.filter(follower = profile)
    for f in follows :
        following_ids.append(f.id)
    tweets = Tweet.objects.filter(user_in = following_ids,date=datetime.today()  )
    all_tweets = []
    for t in tweets :
        all_tweets.append({
            "id" : t.id,
            "user" : t.user,
            "text" : t.tweet,
            "like_counts" : t.likes,
            "meida" : t.media,
            "retweet_counts" : t.retweetNum
            
        })
    return response.Response({"result"  : all_tweets} , status = status.HTTP_200_OK)
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Tweet-LIKEs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['POST', ])
def like_tweet(request):
    user = request.user
    tweet_id = request.data.get(Tweet.id)
    tweet = Tweet.objects.filter(id = tweet_id)
    #??????????????????????????????????? HOW TO UPDATE???
    tweet.likes = tweet.likes + 1
    tweet.save()
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RETWEET~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['POST', ])
def retweet_tweet(request):
    user = request.user
    tweet_id = request.data.get(Tweet.id)
    tweet = Tweet.objects.filter(id = tweet_id)
    #??????????????????????????????????? HOW TO UPDATE???
    tweet.retweetNum = tweet.retweetNum + 1
    tweet.save()
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EDIT PROFILE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['POST', ])
def edit_profile(request):
    user = request.user
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    users = User.objects.filter(username = username)
    if users.count() > 0 :
        return response.Response({"message" : "this username is already taken"} , status=status.HTTP_403_FORBIDDEN)
    
    if user.username != username :
        user.username = username

    if user.email != email :
        user.email = email
    if user.check_password(password):
        user.set_password(password)
    user.save()

    return response.Response({"meesage" : "editted successfully !"} , status = status.HTTP_200_OK)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Following~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['POST', ])
def Following(request):
    user = request.user
    print(user)
    try : 
        profile = Profile.objects.get(user=user)
        print(profile)
    except Profile.DoesNotExist :
        return response.Response(status=status.HTTP_404_NOT_FOUND)

    following_ids = []
    follows = Follow.objects.filter(follower = profile)
    for f in follows :
        following_ids.append(f.id)

    following_list=[]
    for i in following_ids :
        following_list.append({
            "user": i.username ,
        })
    return response.Response({"result"  : following_list} , status = status.HTTP_200_OK)

    #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Follower~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@decorators.api_view(['POST', ])
def Follower(request):
    user = request.user
    print(user)
    try : 
        profile = Profile.objects.get(user=user)
        print(profile)
    except Profile.DoesNotExist :
        return response.Response(status=status.HTTP_404_NOT_FOUND)

    follower_ids = []
    follows = Follow.objects.filter(following = profile)
    for f in follows :
        follower_ids.append(f.id)

    follower_list=[]
    for i in follower_ids :
        follower_list.append({
            "user": i.username ,
        })
    return response.Response({"result"  : follower_list} , status = status.HTTP_200_OK)