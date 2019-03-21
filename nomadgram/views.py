from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os
import boto3
from boto3.s3.transfer import S3Transfer

local_directory = './media'
transfer = S3Transfer(boto3.client('s3', 'ap-northeast-2',
                                   aws_access_key_id = 'AKIAJAI34VUCXMRZUA3A',
                                   aws_secret_access_key='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'))
client = boto3.client('s3')
bucket = 'youngram'
for root, dirs, files in os.walk(local_directory):
    for filename in files:
        local_path = os.path.join(root, filename)
        relative_path = os.path.relpath(local_path, local_directory)
        s3_path = os.path.join('your s3 path',relative_path)
        if filename.endswith('.pdf'):
            transfer.upload_file(local_path, bucket, s3_path,extra_args={'ACL': 'public-read'})
        else:
            transfer.upload_file(local_path, bucket, s3_path)


class ReactAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(str(settings.ROOT_DIR), 'frontend', 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except:
            return HttpResponse(
                """
                index.html not found! build your React app!!
                """,
                status=501,
            )
