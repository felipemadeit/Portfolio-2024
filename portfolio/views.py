from django.shortcuts import render

def home_view (request):
    return render(request, 'home.html')



def projects_view (request):
    return render(request, 'projects.html')