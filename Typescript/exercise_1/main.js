import { LikeComponent } from './like.component';
let log = (message) => { console.log(message); };
//Create a new like button
let button = new LikeComponent(10, false);
log(`Before Liking: ${button.Likes}`);
button.onClick();
log(`After Liking: ${button.Likes} Status: ${button.Status}`);
button.onClick();
log(`After Unliking: ${button.Likes} Status: ${button.Status}`);
