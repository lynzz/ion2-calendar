import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { NavParams, ViewController, Content } from 'ionic-angular';
export interface CalendarOriginal {
    time: number;
    date: Date;
    year: number;
    month: number;
    firstWeek: number;
    howManyDays: number;
}
export interface CalendarDay {
    time: number;
    selected: boolean;
    disable: boolean;
    title?: string;
    subTitle?: string;
    marked?: boolean;
    cssClass?: string;
    style?: {
        title?: string;
        subTitle?: string;
    };
}
export declare class CalendarMonth {
    original: CalendarOriginal;
    days: Array<CalendarDay | void>;
}
export declare class CalendarPage {
    params: NavParams;
    viewCtrl: ViewController;
    ref: ChangeDetectorRef;
    content: Content;
    monthsEle: ElementRef;
    title: string;
    cssClass: string;
    closeLabel: string;
    dayTemp: Array<CalendarDay | null>;
    calendarMonths: Array<CalendarMonth>;
    monthTitleFilterStr: string;
    weekdaysTitle: Array<string>;
    toast: any;
    _s: boolean;
    private static options;
    private static defaultDate;
    private static scrollBackwards;
    constructor(params: NavParams, viewCtrl: ViewController, ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ionViewDidLoad(): void;
    init(): void;
    findCssClass(): void;
    dismiss(): void;
    onSelected(item: CalendarDay): void;
    nextMonth(infiniteScroll: any): void;
    backwardsMonth(): void;
    scrollToDefaultDate(): void;
    onScroll($event: any): void;
    static findDayConfig(day: any): any;
    static createOriginalCalendar(time: number): CalendarOriginal;
    static createCalendarDay(time: number): CalendarDay;
    static createCalendarMonth(original: CalendarOriginal): CalendarMonth;
    static createMonthsByPeriod(startTime: number, monthsNum: number): Array<CalendarMonth>;
    static findInitMonthNumber(date: Date): number;
}
