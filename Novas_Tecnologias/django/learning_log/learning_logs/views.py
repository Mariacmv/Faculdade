from django.shortcuts import render
from .models import Topic

def index(request):
    return render(request,'index.html')

def topics(request):
    topics = Topic.objects.order_by('date_added')
    context = {'topics':topics}
    return render(request, 'topics.html', context)

def topic(request, topic_id):
    topic = Topic.objects.get(id=topic_id)
    entries = topic.entry_set.order_by('date_added')
    context = {'topic':topic, 'entries':entries}
    return render(request, 'topic.html', context)

def new_topic(request):
    if request.method != 'POST':
        form = TopicForm()
    else:
        form = TopicForm(request.POST)
        if form is_valid():
            form.save()

    return HttpResponseRedirect(reverse('learning_logs:topics'))