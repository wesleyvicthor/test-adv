define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, version) {
buf.push("<div class=\"sample\">Utilizando " + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + " na versão " + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + "</div>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
}

});