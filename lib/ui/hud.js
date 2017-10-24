/** @babel */
/** @jsx etch.dom */

import etch from 'etch';

etch.setScheduler(atom.views);

/**
 * 
 */
export default class Hud {

    /**
     * 
     * @param {Object}      opts 
     */
    constructor() {
        this.state = {
            icon: `${__dirname}/../../images/appc_44.png`,
            text: 'Ready',
            spinner: false
        };
        etch.initialize(this);
    }

    render() {
		return (
            <div className='element hud'>
                <img className='hud-icon' src={this.state.icon} />
                <p className='hud-message'>{this.state.text}</p>
                <div className='hud-spinner loading loading-spinner-tiny' attributes={this.state.spinner ? {style:'display:block;'} : {style:'display:none;'}} />
            </div>
        )
	}

	update(opts) {
        opts && Object.assign(this.state, opts);
		return etch.update(this);
	}

	async destroy() {
		await etch.destroy(this);
    }

    display(opts) {
        if (opts.icon) {
            this.state.icon = opts.icon;
        }
  
        if (opts.text) {
            this.state.text = opts.text;    
        }
  
        if (opts.spinner) {
            this.state.spinner = opts.spinner;
        } else {
            this.state.spinner = false;
        }

        if (opts.default) {
            this.default = opts;
        }

        etch.update(this);
    }

    displayDefault() {
        this.display(this.default);
    }
}