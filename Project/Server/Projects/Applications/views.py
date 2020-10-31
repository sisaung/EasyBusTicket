from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from Applications.models import Register,SignIn,Operators,Seats,Routes,Sale_Tickets,Bus_Stations,Contact
from Applications.serializers import RegisterSerializer,SignInSerializer,OperatorsSerializer,SeatsSerializer,RoutesSerializer,Sale_TicketsSerializer,Bus_StationsSerializer,ContactSerializer

class RegisterViewSet(viewsets.ModelViewSet):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer

class SignInViewSet(viewsets.ModelViewSet):
    queryset= SignIn.objects.all()
    serializer_class = SignInSerializer



class OperatorsViewSet(viewsets.ModelViewSet):
    queryset= Operators.objects.all()
    serializer_class = OperatorsSerializer

class RoutesViewSet(viewsets.ModelViewSet):
    queryset = Routes.objects.all()
    serializer_class= RoutesSerializer


class Sale_TicketsViewSet(viewsets.ModelViewSet):
    queryset= Sale_Tickets.objects.all()
    serializer_class = Sale_TicketsSerializer

class Bus_StationsViewSet(viewsets.ModelViewSet):
    queryset = Bus_Stations.objects.all()
    serializer_class= Bus_StationsSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset= Contact.objects.all()
    serializer_class = ContactSerializer

class SeatsViewSet(viewsets.ModelViewSet):
    queryset = Seats.objects.all()
    serializer_class= SeatsSerializer
    # seatQuery="SELECT Applications_operators.operators_name,Applications_seats.id,Applications_seats.seat_no,Applications_seats.status FROM Applications_operators,Applications_seats WHERE Applications_operators.id = Applications_seats.operators_id"

# class SignInCheck(viewsets.ModelViewSet)
