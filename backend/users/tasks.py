from django.core import management

from meal_actions import celery_app


@celery_app.task
def clearsessions():
    management.call_command("clearsessions")
