import {Component} from "@angular/core";

@Component({
  selector: "not-found-page",
  template: `
  <div class="err">
    <div class="img" src="man404.png"></div>
      <h3>Страница с твоими растениями не найдена</h3>
      <h4>Даже админ не знает про твоего запроса</h4>
  </div>
  `,
  styles: [`
  .err{
      position: fixed;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      z-index: -1;
  }
  .img{
    background: url("./man404.png") center / cover no-repeat;
    width: 350px;
    height: 350px;

  }
  `]
})

export class NotFound{

}
