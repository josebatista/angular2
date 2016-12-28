import { User } from './user.interface';

declare var firebase: any;

export class AuthService {
    signupUser(user: User): void {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.error(error);
            });
    }

    signinUser(user: User): void {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.error(error);
            });
    }

    logout(): void {
        firebase.auth().signOut();
    }

    isAuthenticated(): boolean {
        var user = firebase.auth().currentUser;

        if (user) {
            return true;
        } else {
            return false;
        }
    }
}