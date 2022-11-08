import { render } from '../react/renderer';
import { todoComponent, weatherComponent } from '../react/component';
import { renderToString } from 'react-dom/server';

export function home(req, res) {
    let todo = todoComponent();
    let weather = weatherComponent();
    let content = `<div>${renderToString(todo)}${renderToString(weather)}</div>`;
    let response = render('Utility', content);
    res.send(response);
}