
from django.contrib import admin
from django.urls import path
from twitter import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('sign-up/' , views.sign_up),
    path('get-tweets/' , views.get_tweets_home),
    path('sign-in/' , views.log_in),
    path('get-profile-tweets/' , views.get_tweet),
    path('add-tweet/' , views.create_tweet),
    path('tweet-like/' , views.like_tweet),
    path('retweet/' , views.retweet_tweet),
    path('edit-profile' , views.edit_profile)
]
