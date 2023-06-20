import { animate, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";

export const listCardsTrigger = trigger("listCardsAnimation", [
  transition('* => *', [
    query('div.tec-card, a.link-social, div.teste', [
      style({
        "opacity": "0",
        "transform": "translateX(-100%)"
      }),
      stagger(100, [
        animate('400ms ease-out', keyframes([
          style({
            "opacity": "1",
            "transform": "translateX(0)"
          })
        ]))
      ]),
    ], {optional: true})
  ])
])

export const listCardsRightTrigger = trigger("listCardsRightAnimation", [
  transition('* => *', [
    query('div.github, div.linkedin', [
      style({
        "opacity": "0",
        "transform": "translateX(100%)"
      }),
      stagger(100, [
        animate('400ms ease-out', keyframes([
          style({
            "opacity": "1",
            "transform": "translateX(0)"
          })
        ]))
      ]),
    ], {optional: true})
  ])
])
