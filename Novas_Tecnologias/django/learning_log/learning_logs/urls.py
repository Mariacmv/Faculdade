from django.urls import path
from . import views

app_name = 'learning_logs'

"""
Define padrões de URL para learning_logs
"""

urlpatterns = [
    path('',views.index, name='index'),
    path('topics',views.topics, name='topics'),
    path('topics/<topic_id>',views.topic, name='topic'), 
    path('new_topic', views.new_topic, name='topic'),
    ]
