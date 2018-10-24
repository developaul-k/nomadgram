from rest_framework import serializers
from . import models
from nomadgram.users import models as user_models

class SmallImageSerializer(serializers.ModelSerializer):

    """ Used for the notificaztions """
    class Meta:
        model = models.Image
        fields = (
            "file",
        )

class CountImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'comment_count',
            'like_count'
        )


class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'username',
            'profile_image'
        )

class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator'
        )

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):

    comments = CommentSerializer(many=True) # 모델 B, C가 A를 포린키로 바라보고 있을 때 자동으로 _set이 생성됨 model에서 related_name 지정해 놓고 이곳에서 시리얼라이저로 등록하면 연결된 모든 애들이 나옴
    creator = FeedUserSerializer()

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'like_count',
            'creator',
            'created_at'
        )