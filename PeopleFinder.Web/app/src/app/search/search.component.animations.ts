import { animate, group, query, state, style, transition, trigger } from "@angular/animations";

export const searchComponentAnimations = [
    trigger('sidePanel', [
        state('fullScreenSearch', style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })),
        state('sidePanelSearch', style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '30%'
        })),
        state('fullScreenSearchMobile', style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })),
        state('fullScreenDetail', style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0
        }))
    ]),
    trigger('detailPanel', [
        state('fullScreenSearch', style({
            position: 'absolute',
            width: 0,
            top: 0,
            left: '100%'
        })),
        state('sidePanelSearch', style({
            position: 'absolute',
            width: '70%',
            top: 0,
            left: '30%'
        })),
        state('fullScreenSearchMobile', style({
            position: 'absolute',
            top: 0,
            left: '100%',
            width: 0
        })),
        state('fullScreenDetail', style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        }))
    ]),
    trigger('componentAnimations', [
        transition('fullScreenSearch => sidePanelSearch', [
            style({ position: 'relative' }),
            query('@sidePanel', style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })),
            query('@detailPanel', style({
                position: 'absolute',
                width: '70%',
                top: 0,
                left: '100%'
            })),
            group([
                query('@sidePanel', [
                    animate('300ms ease-out', style({ width: '30%' }))
                ]),
                query('@detailPanel', [
                    animate('300ms ease-out', style({ left: '30%' }))
                ])
            ])
        ]),
        transition('sidePanelSearch => fullScreenSearch', [
            style({ position: 'relative' }),
            query('@sidePanel', style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '30%'
            })),
            query('@detailPanel', style({
                position: 'absolute',
                width: '70%',
                top: 0,
                left: '30%'
            })),
            group([
                query('@sidePanel', [
                    animate('300ms ease-out', style({ width: '100%' }))
                ]),
                query('@detailPanel', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ])
            ])
        ]),
        transition('fullScreenSearchMobile => fullScreenDetail', [
            style({ position: 'relative' }),
            query('@sidePanel', style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })),
            query('@detailPanel', style({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: '100%'
            })),
            group([
                query('@sidePanel', [
                    animate('300ms ease-out', style({ left: '-100%' }))
                ]),
                query('@detailPanel', [
                    animate('300ms ease-out', style({ left: 0 }))
                ])
            ])
        ]),
        transition('fullScreenDetail => fullScreenSearchMobile', [
            style({ position: 'relative' }),
            query('@sidePanel', style({
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%'
            })),
            query('@detailPanel', style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })),
            group([
                query('@sidePanel', [
                    animate('300ms ease-out', style({ left: 0 }))
                ]),
                query('@detailPanel', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ])
            ])
        ]),
    ])
];