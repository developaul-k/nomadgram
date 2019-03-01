from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = models.Notification.objects.filter(to=user)[:15]

        serializer = serializers.NotificationSerializer(notifications, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)



def create_notification(creator, to, notification_type, image_id = None, image = None, comment = None):
    if models.Notification.objects.filter(to = to,
        creator = creator, notification_type = notification_type,
        image_id = image_id, image = image ).count() == 0 :
        notification = models.Notification.objects.create(
            creator = creator,
            to = to,
            notification_type = notification_type,
            image_id = image_id,
            image = image,
            comment = comment
        )
    elif notification_type == "comment" :
        notification = models.Notification.objects.create(
            creator = creator,
            to = to,
            notification_type = notification_type,
            image_id = image_id,
            image = image,
            comment = comment
        )
    else:
        models.Notification.objects.filter(to = to,
            creator = creator, notification_type = notification_type,
            image_id = image_id, image = image ).delete()
        notification = models.Notification.objects.create(
            creator = creator,
            to = to,
            notification_type = notification_type,
            image_id = image_id,
            image = image,
            comment = comment
        )

    notification.save()