const typeofChecker = (value) => {
    let res = false;
    const types = ['string', 'object', 'number']
    if(!types.includes(typeof(value))) return new Error('The type of the value that has been given is invalid');
    else if(types.includes(typeof(value))){
        if(typeof(value) === "object"){
            if(!Array.isArray(value)) return new Error('The type of the value that has been given is invalid')
            else if(Array.isArray(value)){
                value.forEach(v => {
                    if(!typeofChecker(v)) return new Error('The type of the value that has been given is invalid')
                    else if(typeofChecker(v)) res = true;
                })
            }
        }
        if(typeof(value) === 'number'){
            value = value+"";
            if(!typeofChecker(value)) return new Error('The type of the value that has been given is invalid')
            else if(typeofChecker(value)) res = true;
        }
        if(typeof(value) === "string") res = true;
        return res;
    }else return res;
}

const f = (value, obj) => {
    if(!typeofChecker(value))return new Error('The type of the value that has been given is invalid')
    if(obj && obj.detail){
        if(typeof(value) == "string"){
            if (value.startsWith("<") && value.endsWith(">")) {
                if (value.includes("@")) {
                    value = {id: value.slice(2, -1), detail: {type: "user", mobile: true}}
                    if (value.id.startsWith('!')) {
                        value = {id: value.id.slice(1), detail: {type: "user", mobile: false}}
                    }else if(value.id.startsWith('&')){
                        value = {id: value.id.slice(1), detail: {type: "role", mobile: undefined}}
                    }
                } else if (value.includes("#")) {
                    value = {id: value.slice(2, -1), detail: {type: "channel", mobile: undefined}}
                } else {
                    return new Error('The string provided is invalid!');
                }
            } else {
                if (isNaN(value) == false) {
                    value = {id: value, detail: {type: undefined, mobile: undefined}}
                } else if (isNaN(value) == true) {
                    return new Error('The string provided is invalid!');
                } else {
                    return new Error('The string provided is invalid!');
                }
            }
            if(!f(value.id)) return new Error('The string provided is invalid!');
            return value;
        }else if(typeof(value) == "object"){
            const list = [];
            value.forEach(v => {
                if (v.startsWith("<") && v.endsWith(">")) {
                    if (v.includes("@")) {
                        v = {id: v.slice(2, -1), detail: {type: "user", mobile: true}}
                        if (v.id.startsWith('!')) {
                            v = {id: v.id.slice(1), detail: {type: "user", mobile: false}}
                        }else if(v.id.startsWith('&')){
                            v = {id: v.id.slice(1), detail: {type: "role", mobile: undefined}}
                        }
                    } else if (v.includes("#")) {
                        v = {id: v.slice(2, -1), detail: {type: "channel", mobile: undefined}}
                    } else {
                        return new Error('The string provided is invalid!');
                    }
                } else {
                    if (isNaN(v) == false) {
                        v = {id: v.slice(2, -1), detail: {type: undefined, mobile: undefined}}
                    } else if (isNaN(v) == true) {
                        return new Error('The string provided is invalid!');
                    } else {
                        return new Error('The string provided is invalid!');
                    }
                }
                if(!f(v.id)) return new Error('The string provided is invalid!');
                list.push(v);
            })
            return list;
        }else {
            return new Error('The type of the value that has been given is invalid');
        }
    }else if(!obj || !obj.detail){
        if(typeof(value) == "string"){
            if (value.startsWith("<") && value.endsWith(">")) {
                if (value.includes("@")) {
                    value = value.slice(2, -1);
                    if (value.startsWith('!')) {
                        value = value.slice(1);
                    }else if(value.startsWith('&')){
                        value = value.slice(1);
                    }
                } else if (value.includes("#")) {
                    value = value.slice(2, -1);
                } else {
                    return new Error('The string provided is invalid!');
                }
                if(!f(value)) return new Error('The string provided is invalid!');
                return value;
            } else {
                if (isNaN(value) == false) {
                    return value.toString();
                } else if (isNaN(value) == true) {
                    return new Error('The string provided is invalid!');
                } else {
                    return new Error('The string provided is invalid!');
                }
            }
        }else if(typeof(value) == "object"){
            const list = [];
            value.forEach(v => {
                if (v.startsWith("<") && v.endsWith(">")) {
                    if (v.includes("@")) {
                        v = v.slice(2, -1);
                        if (v.startsWith('!')) {
                            v = v.slice(1);
                        }else if(v.startsWith('&')){
                            v = v.slice(1);
                        }
                    } else if (v.includes("#")) {
                        v = v.slice(2, -1);
                    } else {
                        return new Error('The string provided is invalid!');
                    }
                } else {
                    if (isNaN(v) == false) {
                        null;
                    } else if (isNaN(v) == true) {
                        return new Error('The string provided is invalid!');
                    } else {
                        return new Error('The string provided is invalid!');
                    }
                }
                if(!f(v)) return new Error('The string provided is invalid!');
                return list.push(v);
            })
            return list;
        }else {
            return new Error('The type of the value that has been given is invalid');
        }
    }
}

module.exports = f;