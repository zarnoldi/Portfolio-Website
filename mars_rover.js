


function Rover(input, IntPostion, Direction){
    this.input = input;
    this.IntPostion = IntPostion;
    this.Direction = Direction;
}

Rover.prototype.GetCurrentDirection = function(input){

    input.forEach(function(command){

        // Input L
        if(command == 'L' && this.Direction == 'N'){

            Direction = 'W';

        }else if(command == 'L' && this.Direction == 'W'){
            
            Direction = 'S';
    
        }else if (command == 'L' && this.Direction == 'S'){

            Direction = 'E';

        }else if (command == 'L' && this.Direction == 'E'){

            Direction = 'N';

        // Input R
        } else if (command == 'R' && this.Direction == 'N'){
            
            Direction = 'E';
    
        }else if (command == 'R' && this.Direction == 'W'){

            Direction = 'N';

        }else if (command == 'R' && this.Direction == 'S'){

            Direction = 'W';

        }else if (command == 'R' && this.Direction == 'E'){

            Direction = 'S';
        }else {

            console.log('Incorrect input');
        }
    });
 return this.Direction;
};

Rover.prototype.GetCurrentPostion = function(input){

    Xcordindate = this.IntPostion[0];
    Ycordindate = this.IntPostion[1];

    input.forEach(function(command){

        if (command == 'M' && this.Direction == 'N'){

            NewYPostion = Ycordindate + 1;

            currentPostion = [Xcordindate, NewYPostion];

        } else if (command == 'M' && this.Direction == 'E'){

            NewXPostion = Xcordindate + 1;

            currentPostion = [NewXPostion, Ycordindate];

        }else if (command == 'M' && this.Direction == 'S'){

            NewYPostion = Ycordindate - 1;

            currentPostion = [Xcordindate, NewYPostion];
    
        }else if (command == 'M' && this.Direction == 'W'){

            NewXPostion = Xcordindate -1;

            currentPostion = [NewXPostion, Ycordindate];

        }else {

            console.log('Incorrect Input');
        }


    });

return currentPostion;
}







const rover1 = new Rover('LMR');

console.log(rover1);