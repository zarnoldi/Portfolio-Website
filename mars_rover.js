


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
    let currentPostion;

    input.forEach(function(command){

        if (command == 'M' && this.Direction == 'N'){

            NewYPostion = this.Ycordindate + 1;

            currentPostion = [this.Xcordindate, NewYPostion];

        } else if (command == 'M' && this.Direction == 'E'){

            NewXPostion = this.Xcordindate + 1;

            currentPostion = [NewXPostion, this.Ycordindate];

        }else if (command == 'M' && this.Direction == 'S'){

            NewYPostion = this.Ycordindate - 1;

            currentPostion = [this.Xcordindate, NewYPostion];
    
        }else if (command == 'M' && this.Direction == 'W'){

            NewXPostion = this.Xcordindate -1;

            currentPostion = [NewXPostion, this.Ycordindate];

        }else {

            console.log('Incorrect Input');
        }


    });

return currentPostion;
};


const rover1 = new Rover('MMMMMM', [0,0], 'N');

console.log(rover1.GetCurrentDirection(['L','M','R','M','L','R','M']));

console.log(rover1.GetCurrentPostion(['L','M','R','M','L','R','M']));