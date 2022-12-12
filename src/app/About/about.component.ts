import {Component} from "@angular/core";

@Component({
  selector: "about-page",
  template: `
  <h1>About Page</h1>
  <img src="{{img}}" alt="plant" width="400">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur provident quam in veniam placeat libero molestiae? Repudiandae est laboriosam ratione exercitationem facilis ut consequuntur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nulla earum itaque explicabo natus soluta veritatis quia eveniet, velit minus. Mollitia unde deleniti repellat magni placeat minus laboriosam velit inventore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestias porro sunt id fugiat veniam nisi consectetur quos atque! Ullam esse suscipit, quasi doloremque eveniet illo velit consectetur nihil ex.</p>
  `
})

export class AboutPage{
 img: string = "https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kaktusy-36.jpg"
}
