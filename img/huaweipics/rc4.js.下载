function base64_encode(data) {
	var b64c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var i, res = "", length = data.length;
	for (i = 0; i < length - 2; i += 3) {
		res += b64c.charAt(data.charCodeAt(i) >>> 2);
		//console.log(b64c.charAt(data.charCodeAt(i) >>> 2));
		res += b64c.charAt(((data.charCodeAt(i) & 3) << 4) |
					(data.charCodeAt(i + 1) >>> 4));
		res += b64c.charAt(((data.charCodeAt(i + 1) & 15) << 2) |
					(data.charCodeAt(i + 2) >>> 6));
		res += b64c.charAt(data.charCodeAt(i + 2) & 63);
	}
	if (length % 3 === 2) {
		res += b64c.charAt(data.charCodeAt(i) >>> 2);
		res += b64c.charAt(((data.charCodeAt(i) & 3) << 4) |
					(data.charCodeAt(i + 1) >>> 4));
		res += b64c.charAt(((data.charCodeAt(i + 1) & 15) << 2));
		res += "=";
	} else if (length % 3 === 1) {
		res += b64c.charAt(data.charCodeAt(i) >>> 2);
		res += b64c.charAt(((data.charCodeAt(i) & 3) << 4));
		res += "==";
	}

	return res;
}

function rc4_key(strKey) {
    var key = Array(256);
    var box = Array(256);

    var i, j, tmp;
    for (i=0; i<256; i++) {
        key[i] = strKey.charCodeAt(i % strKey.length);
        box[i] = i;
    }

    for (i=0,j=0; i<256; i++) {
        j = (j + box[i] + key[i]) % 256;
        tmp = box[i];
        box[i] = box[j];
        box[j] = tmp;
    }

    return box;
}

function rc4_do(data, box){
    var i=0, j=0, tmp;
    for(var x=0; x<data.length; x++)
    {
        var i = (i+1) % 256;
        var j = (j+box[i]) % 256;
        tmp = box[i];
        box[i] = box[j];
        box[j] = tmp;
        var k = (box[i] + (box[j] % 256)) % 256;
        data[x] = data[x] ^ box[k];
    }
    return data;
}

function rc4_str(strKey, strData) {
    strData = decodeURIComponent(strData);
    var box = rc4_key(strKey);
    var data = Array(strData.length);
    for(var i=0; i<strData.length; i++){
        data[i] = strData.charCodeAt(i);
    }
    rc4_do(data, box);
    for(var i=0; i<data.length; i++)
        data[i] = String.fromCharCode(data[i]);
    return encodeURIComponent(data.join(''));
}

function rc4_str_base64(strKey, strData) {
    strData = encodeURIComponent(strData);
    var box = rc4_key(strKey);               
    var data = Array(strData.length);       
    for(var i=0; i<strData.length; i++){
        data[i] = strData.charCodeAt(i);
    }
    rc4_do(data, box);

    for(var i=0; i<data.length; i++) {
        data[i] = String.fromCharCode(data[i]);
	}

    return base64_encode(data.join(''));
}

function base64_decode(data) {
	var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
		ac = 0,
	    dec = '',
	    tmp_arr = [];
	if (!data) {
		return data;
	}
	data += '';
	do { 
	    h1 = b64.indexOf(data.charAt(i++));
	    h2 = b64.indexOf(data.charAt(i++));
	    h3 = b64.indexOf(data.charAt(i++));
	    h4 = b64.indexOf(data.charAt(i++));
	    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
	    o1 = bits >> 16 & 0xff;
	    o2 = bits >> 8 & 0xff;
	    o3 = bits & 0xff;
	    if (h3 == 64) {
	    	tmp_arr[ac++] = String.fromCharCode(o1);
	    } else if (h4 == 64) {
	    	tmp_arr[ac++] = String.fromCharCode(o1, o2);
	    } else {
	    	tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
	    }
	  } while (i < data.length);
	dec = tmp_arr.join('');
	return dec.replace(/\0+$/, '');
}

function rc4_base64_str(strKey, strData) {	
	strData = base64_decode(strData);
	var box = rc4_key(strKey);               
	var data = Array(strData.length);       
	for(var i=0; i<strData.length; i++){
		data[i] = strData.charCodeAt(i);
	}
	rc4_do(data, box);

	for(var i=0; i<data.length; i++) {
		data[i] = String.fromCharCode(data[i]);
	}

    return decodeURIComponent(data.join('').replace(/\+/g, '%20'));
};