from rest_framework import serializers
from Applications.models import Register,SignIn,Operators,Seats,Routes,Sale_Tickets,Bus_Stations,Contact
from django.contrib.auth.hashers import make_password

class RegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model=Register
		fields = ('id', 'first_name', 'last_name', 'Email', 'password','confirm_password')

class RegisterSerializer(serializers.ModelSerializer):
	password= serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})
	confirm_password=serializers.CharField(style={'input_type': 'password', 'placeholder': 'Confirm Password'})

	class Meta:
		model=Register
		fields = ('id', 'first_name', 'last_name', 'Email', 'password','confirm_password')

class SignInSerializer(serializers.ModelSerializer):
	password= serializers.CharField(style={'input_type': 'password', 'placeholder': 'Password'})

	class Meta:
		model=SignIn
		fields = ('id','email','password')
# 2
class SeatsSerializer(serializers.ModelSerializer):
	class Meta:
		model=Seats
		fields=('id','operators','seat_no','status')

class RoutesSerializer(serializers.ModelSerializer):
	class Meta:
		model=Routes
		fields=('id','operators','source','destination','price')

# 1
class OperatorsSerializer(serializers.ModelSerializer):
	Seats_id = SeatsSerializer(many=True, read_only=True)
	Routes_id = RoutesSerializer(many=True,read_only=True)
	class Meta:
		model=Operators
		fields=('id','operators_name','class_type','date','depature_time','arrival_time','nationality','selled_seats','available_seat','browse_route','day_night','images','Seats_id','Routes_id')




class Sale_TicketsSerializer(serializers.ModelSerializer):
	class Meta:
		model=Sale_Tickets
		fields=('id','traveller_name','gender','email','phone_no','note','busId','busname','route','depaturetime','arrivaltime','seatnumbers','subtotal','buyingdate')

#
# class OperatorRouteSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model=Operators_route
# 		fields=('id','operator_id','route_id')

class Bus_StationsSerializer(serializers.ModelSerializer):
	class Meta:
		model=Bus_Stations
		fields=('id','bus','city','address','phone')

class ContactSerializer(serializers.ModelSerializer):
	class Meta:
		model=Contact
		fields=('id','traveller_name','email','phone','message','date')
