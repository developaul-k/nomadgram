from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from taggit.managers import TaggableManager
from nomadgram.users import models as user_models
from django.contrib.humanize.templatetags.humanize import naturaltime

# TimeStampedModel 은 데이터베이스에 생성되는것이 아니라 다른 모델에서 사용될 용도로 생성.
# 그 이유는 Image, Comment 모델에서 사용이 될건데 반복작업을 피하기 위해 abstract class를 생성.
# 아래 Image, Comment 클래스에 상속하여 사용한다.
@python_2_unicode_compatible
class TimeStampedModel( models.Model ):
    created_at = models.DateTimeField(auto_now_add=True)  #auto_now_add=True 자동으로 날짜추가
    updated_at = models.DateTimeField(auto_now=True)  #auto_now=True 모델이 저장될때마다 자동업데이트

    class Meta():
        abstract = True
        # abstract = True 라고 입력하면 그 모델은 abstract base 클래스가 된다.
        # var가 아닌것은 메타에 속한다. 해당 클래스에 엑스트라정보이기 때문 (그러므로 abstract = True도 꼭 Meta 클래스 아래에 작성하여야한다.)
@python_2_unicode_compatible
class Image( TimeStampedModel ):
    """ Image Model """

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True, related_name="images")
    tags = TaggableManager()

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    @property #property는 모델의 필드인데 데이터로는 가지 않지만 모델 안에 존재한다. 그리고 function 임
    def like_count(self):
        return self.likes.all().count() # count 는 파이선 메소드

    @property
    def comment_count(self):
        return self.comments.all().count()

    def __str__(self):
         return '{} - {}'.format(self.location, self.caption)
    class Meta:
        ordering = ['-created_at']

@python_2_unicode_compatible
class Comment( TimeStampedModel ):
    """ Comment Model """

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    image = models.ForeignKey( Image, on_delete=models.CASCADE, null=True, related_name="comments" )

    def __str__(self):
        return self.message
@python_2_unicode_compatible
class Like( TimeStampedModel ):
    """ Like Model """

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    image = models.ForeignKey( Image, on_delete=models.CASCADE, null=True, related_name="likes" )

    def __str__(self):
        return 'User: {} - Image Caption: {}'.format(self.creator.username, self.image.caption)