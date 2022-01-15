const name = "LEE";

const obj = {
    name : "JAE",
    getName2: function() {
        console.log(this.name);
        function foo() {
            console.log(this.name);
        }
        foo();
    }
}

obj.getName2();