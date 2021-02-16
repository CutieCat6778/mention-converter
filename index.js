const typeofChecker = (value) => {
    let res = false;
    const types = ['string', 'object', 'number']
    if(!types.includes(typeof(value))) return undefined
    else if(types.includes(typeof(value))){
        if(typeof(value) === "object"){
            if(!Array.isArray(value)) return undefined
            else if(Array.isArray(value)){
                value.forEach(v => {
                    if(!typeofChecker(v)) return undefined
                    else if(typeofChecker(v)) res = true;
                })
            }
        }
        if(typeof(value) === 'number'){
            value = value+"";
            if(!typeofChecker(value)) return undefined
            else if(typeofChecker(value)) res = true;
        }
        if(typeof(value) === "string") res = true;
        return res;
    }else return res;
}

const f = (value, obj) => {
    if(!typeofChecker(value))return undefined
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
                    return undefined
                }
            } else {
                if (isNaN(value) == false) {
                    value = {id: value, detail: {type: undefined, mobile: undefined}}
                } else if (isNaN(value) == true) {
                    return undefined
                } else {
                    return undefined
                }
            }
            if(!f(value.id)) return undefined
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
                        return undefined
                    }
                } else {
                    if (isNaN(v) == false) {
                        v = {id: v.slice(2, -1), detail: {type: undefined, mobile: undefined}}
                    } else if (isNaN(v) == true) {
                        return undefined
                    } else {
                        return undefined
                    }
                }
                if(!f(v.id)) return undefined
                list.push(v);
            })
            return list;
        }else {
            return undefined
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
                    return undefined
                }
                if(!f(value)) return undefined
                return value;
            } else {
                if (isNaN(value) == false) {
                    return value.toString();
                } else if (isNaN(value) == true) {
                    return undefined
                } else {
                    return undefined
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
                        return undefined
                    }
                } else {
                    if (isNaN(v) == false) {
                        null;
                    } else if (isNaN(v) == true) {
                        return undefined
                    } else {
                        return undefined
                    }
                }
                if(!f(v)) return undefined
                return list.push(v);
            })
            return list;
        }else {
            return undefined
        }
    }
}

module.exports = f;