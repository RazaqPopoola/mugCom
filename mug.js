

/*Validate the form correctly before submission */

			var svalidation = false;
			var cvalidation = false;
	
		
			function inputValidation()
			{
				var inputGood = true;

				if(svalidation == false)
				{
					alert("Please choose the Mug size to order");
					inputGood = false;
				}
			
				if(cvalidation == false)
				{
					alert("Please choose the Mug Colour");
					inputGood = false;
				}
			
			
				if(document.mugForm.customername.value == "")
				{
					alert("You must enter your name");
					inputGood = false;
				}
				else
				{
					var custN = cusNameCheck();
					if(custN == false)
					{
					  return false;
					}
				}
	
				if(document.mugForm.phoneNum.value == "")
				{
					alert("Please enter your Phone Number");
					    inputGood = false;
				}
				else
				{
					var custP = phoneCheck();
					if(custP == false)
					{
						return false;
					}
				}
				
				if(document.mugForm.creditcard.value == "")
				{
					alert("Please enter your Credit Card");
						inputGood = false;
				}
				else
				{
					var custC = cardCheck();
					if(custC == false)
					{
						return false;
					}
				}
				
				if(document.mugForm.ppsnum.value == "")
				{
					alert("Please enter your PPS number");
						inputGood = false;
				}
				else
				{
					var cPPS = PPSCheck();
					if(cPPS == false)
					{
						return false;
					}
				}
				
				return inputGood;
			}		
		
	
	
	
	var smallSize = "140px";
	var mediumSize = "170px";
	var largeSize = "200px";
	var xlargeSize = "230px";
	
	
		/*The mug size */
	function mugSize()
	{
		if (document.getElementById('small').checked)
		{
			
			document.getElementById('mugs').style.width=smallSize;
			document.getElementById('mugs').style.height=smallSize;
		}
			
		else if (document.getElementById('medium').checked)
		{
		
			document.getElementById('mugs').style.width=mediumSize;
			document.getElementById('mugs').style.height=mediumSize;
		}
		else if(document.getElementById('large').checked)
		{
			
			document.getElementById('mugs').style.width=largeSize;
			document.getElementById('mugs').style.height=largeSize;
		}
		else if(document.getElementById('xlarge').checked)
		{
			
			document.getElementById('mugs').style.width=xlargeSize;
			document.getElementById('mugs').style.height=xlargeSize;
		}
		
			return true;
	}						
	
/*The mug color */
	function changeColor(){
	
		if (document.getElementById("redId").checked)
		{
			document.getElementById("mugs").src="images/redCup.PNG";
		}
		else if(document.getElementById("pinkId").checked)
		{
			document.getElementById("mugs").src="images/pinkCup.png";
		}
		else if(document.getElementById("blackId").checked)
		{
			document.getElementById("mugs").src="images/blackCup.png";
		}
		else if(document.getElementById('greenId').checked)
		{
			var image = document.getElementById("mugs").src="images/greenCup.jpg";
		}
	 else
	 {
			var image = document.getElementById("mugs").src="images/blueCup.png";
	 }
	 
	 return true;
	}
	
	
	/*The mug size price calculation*/
	function sizeChoice()
	{		
		var mugSize = 0;

		var mChoice = document.getElementsByName("mug");
		for(i = 0; i < mChoice.length; i++)
		{
			if(mChoice[i].checked )
			{
				mugSize = Number(mChoice[i].value);
			}
		}
		
		return mugSize;
	}

	
	
	/*The mug size price calculation*/
	function upgrade()
	{		
		var mugSize = 0;

		var mChoice = document.getElementsByName("mugUpgrade");
		for(i = 0; i < mChoice.length; i++)
		{
			if(mChoice[i].checked )
			{
				mugSize = Number(mChoice[i].value);
			}
		}
		
		return mugSize;
	}

	
	/* The add-on and the supplier options price calculation   */
	function mugAS()
	{		
	
		var mugPrice = 0;
		
		var mChoice = document.getElementsByTagName("input");
			
		for(var i = 0; i < mChoice.length; i++) 
		{
			if(mChoice[i].type == "checkbox" && mChoice[i].checked) 
			{
				 mugPrice += Number(mChoice[i].value);
				 if((mChoice[i].type == "checkbox" && mChoice[i].checked) && (document.getElementById('medium').checked))
				 {
					 mugPrice = Number(mugPrice);
				 }
				 else if((mChoice[i].type == "checkbox" && mChoice[i].checked) && (document.getElementById('large').checked))
				 {
					mugPrice = Number(mugPrice);
				 }
				 else if((mChoice[i].type == "checkbox" && mChoice[i].checked) && (document.getElementById('xlarge').checked))
				 {
					mugPrice = Number(mugPrice);
				 }
			}  
		}
			return mugPrice;
	}
	
/*The Sum price calculation*/
	function getPrice()
	{
		var price = sizeChoice() + mugAS() + upgrade() ;
		
		var paid = document.getElementById('sumPrice');
		paid.style.display='block';
		paid.innerHTML = "Total Price &euro;" + price.toFixed(2);
	}

	
	
	/*Checking the name field*/
	function cusNameCheck()
	{
	var custName;
	var nameGood = new Boolean(true);

	custName=document.forms['mugForm']['customername'].value;


	if(!isNaN(custName) || custName.length < 6)
	{
		nameGood = false;
	}

	if(custName.indexOf(' ') == 0 || custName.lastIndexOf(' ') == custName.length-1)
	{
		nameGood = false;
	}

	if(!(custName.indexOf(' ') == custName.lastIndexOf(' ')))
	{
		nameGood = false;
	}

	if(nameGood)
	{
		document.getElementById('cusname').style.background='none';
		return nameGood;

	}
	else
	{
		alert("Customer Name Is not a valid"); 
		document.getElementById('cusname').style.background='red';
		return false;
	}                                                  

	return nameGood;
	}

	
	/*Checking the credit card field*/
	function cardCheck()
			{
				var CardNum; 
				var cardGood = new Boolean (true);
				
			    var total = 0;
				var count = 0;
				var odd = 0;
	
				cardNum=document.forms['mugForm']['creditcard'].value;
				
				if ((cardNum == null) || (cardNum == ""))
				{
					cardGood = false;
				}
			
				if(cardNum.length != 16)
				{
					cardGood = false;
				}
				
				if ( cardNum.charAt(0) == "4" && cardNum.length == 16)
				{
					 alert("Visa Card");
				}
				
				if(cardNum.charAt(0) =="5" && cardNum.length == 16)
				{
					alert("Master Card");
				}
			
				if(cardNum.substring(0,4) == "6011" && cardNum.length == 16)
				{
					alert("Discover Card");
				}
			
				var check = parseInt(cardNum.substring(15,16));
				
				if(isNaN(cardNum))
				{
					cardGood = false;
				
				}
				
				for(var i = cardNum.length-2; i >= 0; i--)
				{
					count++;
					if(count % 2 == 1)
					{
						odd = cardNum[i] * 2;
						if(odd > 9)
						{
							odd -= 9;
						}
						total = total + odd;
					}
					else
					{
						total = total + Number(cardNum[i]);
					}
				}
	
				if(!((total != 0) && (total % 10) +  (check % 10 == 0 )))
				{
					alert("Credit Card Is Bad");
					document.getElementById('cuscard').style.background='red';
					return false;
				}
				else
				{
					document.getElementById('cuscard').style.background='none';
					return cardGood;
				}
				
				return cardGood;
			}
	
	/*Checking the PPS Number field*/
function PPSCheck()
			{ 
			
				var PPSNum;	
				var ppsGood = new Boolean(true);
				var multiplingChar = 8;
			
				PPSNum=document.forms['mugForm']['ppsnum'].value;
		
				if((PPSNum == null) || (PPSNum == ""))
				{
					ppsGood = false;
				}
		
				if(PPSNum.length != 8)
				{
					ppsGood = false;
				}
		
				var number = PPSNum.substring(0,7);
				var letter = PPSNum.substring(7,8);
		
				if(isNaN(number))
				{
					ppsGood = false;
				}
		
				if(!isNaN(letter))
				{
					ppsGood = false;
				}
			
				PPSNum = PPSNum.toUpperCase();
				letter = PPSNum.charCodeAt(7);
				letter = letter - 64;

				var sum = 0;
				for (var i = 0; i < number.length; i++)
				{
					sum+= number[i] * multiplingChar--;
				}
			
				if(letter == 23)
				{
					letter == 0;
				}
			
				if(sum % 23 != letter)
				{
					alert("Bad PPS Num");
					document.getElementById('cuspps').style.background='red';
					return false;
				}
				else
				{
					document.getElementById('cuspps').style.background='none';
					return ppsGood;
				}
				return ppsGood;
			}


	/*Checking the phone number field*/
function phoneCheck()
			{
				var phoneNumber; 
				var phoneGood = new Boolean (true);
			
				phoneNumber=document.forms['mugForm']['phoneNum'].value;
				
				if ((phoneNumber == null) || (phoneNumber == ""))
				{
					phoneGood = false;
				}
				
				if(!((phoneNumber.length == 10) || (phoneNumber.length == 12)))
				{
					phoneGood = false;
				}
				
				if((phoneNumber.length == 12)&&(phoneNumber.charAt(0)!="(")&&(phoneNumber.charAt(4)!=")")&&(phoneNumber.charAt(3)!="-")&&(phoneNumber.charAt(7)!="-"))
				{
					phoneGood = false;
				}
				
				if((phoneNumber.length == 12)&&(phoneNumber.charAt(0)=="(")&&(phoneNumber.charAt(4)==")"))
				{
					phoneNumber = phoneNumber.substring(1,4) + phoneNumber.substring(5,12);
				}
				
				if((phoneNumber.length == 12) && (phoneNumber.charAt(3)=="-") && (phoneNumber.charAt(7)=="-"))
				{
					phoneNumber = phoneNumber.substring(0,3) + phoneNumber.substring(4,7) + phoneNumber.substring(8,12);
				}
				
				var check = phoneNumber.substring(0,3)
				if(!((check == "021") || (check == "083") || (check == "085") || (check == "086") || (check == "087") || (check == "089")))
				{
					phoneGood = false;
				}
			
				for(x=3; x < 10; x++)
				{
					check = phoneNumber.slice(x, x+1);
					if((check < "0") || (check > "9"))
					phoneGood = false;
				}
		
				if(!phoneGood)
				{
					alert("Is not a valid phone Number");
					document.getElementById('cusphone').style.background='red';
					return false;
				}
				else
				{
					document.getElementById('cusphone').style.background='none';
					return phoneGood;
				}
				return phoneGood;
			}