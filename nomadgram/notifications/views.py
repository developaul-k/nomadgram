from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = models.Notification.objects.filter(to=user)[:15]

        serializer = serializers.NotificationSerializer(notifications, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)



def create_notification(creator, to, notification_type, image_id = None, image = None, comment = None):

    notification = models.Notification.objects.create(
        creator = creator,
        to = to,
        notification_type = notification_type,
        image_id = image_id,
        image = image,
        comment = comment
    )

    notification.save()