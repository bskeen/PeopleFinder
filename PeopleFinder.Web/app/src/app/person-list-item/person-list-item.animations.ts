import { trigger, state, style, transition, animate } from '@angular/animations';

const animation = '0.25s ease-out';

const styleDefault = {
  boxShadow: `0px 0px 0px 0px rgba(0,0,0,.2), 0px 0px 0px 0px rgba(0,0,0,.14), 0px 0px 0px 0px rgba(0,0,0,.12)`,
};

const styleHover = {
  boxShadow: `0px 5px 5px -3px rgba(0,0,0,.2), 0px 8px 10px 1px rgba(0,0,0,.14), 0px 3px 14px 2px rgba(0,0,0,.12)`,
};

const styleSelected = {
  boxShadow: styleHover.boxShadow,
  backgroundColor: '#d3d3d3',
  color: '#1976d2',
};

export const HoverAnimations = [
  trigger('hover', [
    state('void', style(styleDefault)),
    state('default', style(styleDefault)),
    state('hover', style(styleHover)),
    state('selected', style(styleSelected)),
    transition('* => hover', [
      animate(animation)
    ]),
    transition('* => selected', [
      animate(animation)
    ]),
    transition('* => default', [
      animate(animation)
    ])
  ])
];
