class Slingshot
{

constructor(objectA,positionB)
   {

   var options=
   {
   bodyA:objectA,
   pointB:positionB,
   length:10,
   stiffness:0.08
   }
   this.rope = Constraint.create(options);
   this.B = positionB;
   World.add(world,this.rope);
   }

fly()
   {
   this.rope.bodyA = null;       // null data type will clear out all the values inside the variable.
   }

attach(body){

   this.rope.bodyA = body;
   
}
   
display()
   {
      if(this.rope.bodyA)  // Checks whether bodyA exists in this.rope, i.e. it is not a null value
      {
         push();
         strokeWeight(5);
         stroke(48,22,8);
         pop();
      }
    }
}