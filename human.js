class Human {
    name;
    gender;
    weight;
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    say(text) {
        document.write(text);
    }
    eat(apple) {
        if (this.check(apple)) {
            this.weight++;
            apple.decrease();
            this.say("tao vua an tao day");
        }
    }
    check(apple) {
        return apple.getWeight() > 0;
    }
}