import classes from "./Content.module.sass";
import {Posts} from "./posts/Posts";

export const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content__imgWrapper}>
                <img className={classes.content__img} src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg" alt="sea" />
            </div>
            <div className={classes.content__desc}>
                <Posts />
            </div>
        </div>
    );
}