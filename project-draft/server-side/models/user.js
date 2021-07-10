let users = [];


class User {
    constructor(fname, lname, username, password, role) {
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    login() {
        return users.find(u => { return u.username === this.username && u.password === this.password });
    }

    createUser(){
        const index = users.findIndex(u => u.username === this.username);
        if(index > -1){
            throw new Error ("User already exists")
        }else{
            users.push(this);
            return this;
        }
    }

    updateUser() {
        const index = users.findIndex(u => u.username === this.username);
        if(index > -1) {
            users.splice(index,1,this);
            return this;
        }else{
            throw new Error("User not found to update");
        }
    }

    static search(username) {
        const index = users.findIndex(u => u.username === username);
        if (index > -1) {
            return users[index];
        } else {
            throw new Error("No search found.")
        }
    }


}



users.push(new User("john",'Smith','john', 'admin123', 'admin'));
users.push(new User("Edward",'Jack', 'edward', 'Edward567', 'member'));


module.exports = User;