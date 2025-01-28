function isValid(s: string): boolean {
    let stack: string[] = [];
    let map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for (let i = 0; i < s.length; i++) {
        let val = s[i];

        if (val == "(" || val == "{" || val == "[") {
            stack.push(val);
        } else {
            let last = stack.pop();

            if (last === undefined || val != map[last]) {
                return false;
            }
        }
    }

    return stack.length == 0;
};