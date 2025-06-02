from django import forms
from .models import Topic

class TopicForms(Forms.ModelForm):
    class Meta:
        model = Topicfields
        #preencher