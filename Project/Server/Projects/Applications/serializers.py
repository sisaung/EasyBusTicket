from rest_framework import serializers
from Applications.models import Operators,Routes,Sale_Tickets,Contact
from django.contrib.auth.hashers import make_password




class RoutesSerializer(serializers.ModelSerializer):
	class Meta:
		model=Routes
		fields=('id','operators','source','destination','price')

# 1
class OperatorsSerializer(serializers.ModelSerializer):
	Routes_id = RoutesSerializer(many=True,read_only=True)
	class Meta:
		model=Operators
		fields=('id','operators_name','date','class_type','depature_time','arrival_time','nationality','selled_seats','available_seat','browse_route','day_night','images','Routes_id')




class Sale_TicketsSerializer(serializers.ModelSerializer):
	class Meta:
		model=Sale_Tickets
		fields=('id','traveller_name','gender','email','phone_no','note','busId','busname','route','depaturetime','arrivaltime','seatnumbers','subtotal','buyingdate')


class ContactSerializer(serializers.ModelSerializer):
	class Meta:
		model=Contact
		fields=('id','traveller_name','email','phone','message','date')
