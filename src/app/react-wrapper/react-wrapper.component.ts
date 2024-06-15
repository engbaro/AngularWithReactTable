import { Component, Input, OnInit } from '@angular/core';
import ReactDOM from "react-dom/client"; 
import ReactTableComponent from '../react-components/ReactTableComponent';
import React from 'react';

@Component({
    selector: 'app-react-wrapper',
    template: '<div id="react-root"></div>',
})
export class ReactWrapperComponent implements OnInit {
    @Input() data: any;
    @Input() columns: any;

    constructor() {}

    ngOnInit() {
        const container = document.getElementById('react-root');
        if (container) {
            ReactDOM.createRoot(container)
            .render(React.createElement(ReactTableComponent, { data: this.data, columns: this.columns }));
        }
    }
}
