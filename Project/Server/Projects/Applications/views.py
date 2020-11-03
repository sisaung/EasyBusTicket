from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from Applications.models import Operators,Routes,Sale_Tickets,Contact
from Applications.serializers import OperatorsSerializer,RoutesSerializer,Sale_TicketsSerializer,ContactSerializer


class OperatorsViewSet(viewsets.ModelViewSet):
    queryset= Operators.objects.all()
    serializer_class = OperatorsSerializer

class RoutesViewSet(viewsets.ModelViewSet):
    queryset = Routes.objects.all()
    serializer_class= RoutesSerializer


class Sale_TicketsViewSet(viewsets.ModelViewSet):
    queryset= Sale_Tickets.objects.all()
    serializer_class = Sale_TicketsSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset= Contact.objects.all()
    serializer_class = ContactSerializer
