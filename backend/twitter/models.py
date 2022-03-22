from django.db import models
from django.contrib.auth.models import User
import time

# Create your models here.

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PROFILE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    picture = models.ImageField(null=True, blank=True, upload_to='Media/Profile/')


    def __str__(self):
        return self.user.username
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TWEET~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Tweet(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    tweet = models.CharField(max_length=250)
    date = models.DateTimeField(auto_now_add=True)
    media = models.FileField(upload_to='Media/')
    likes = models.IntegerField(default=0)
    retweetNum = models.IntegerField(default=0)

    def __str__(self):
        return self.tweet
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RETWEET~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Retweet(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FOLLOW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Follow(models.Model):
    follower = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='follower')
    following = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='following')

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LIKE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Like(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOTIFICATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Notification(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    seen = models.BooleanField(default=False)
    #content
