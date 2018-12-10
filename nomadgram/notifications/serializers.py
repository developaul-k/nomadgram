from rest_framework import serializers
from . import models
from nomadgram.users import serializers as user_serializers
from nomadgram.images import serializers as images_serializers

class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    image = images_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'
        fields = (
            'comment',
            'natural_time',
            'creator',
            'image_id',
            'id',
            'image',
            'notification_type',
            'to'
        )