goog.provide('athens.electron');
athens.electron.electron = require("electron");
athens.electron.remote = athens.electron.electron.remote;
athens.electron.dialog = athens.electron.remote.dialog;
athens.electron.app = athens.electron.remote.app;
athens.electron.fs = require("fs");
athens.electron.path = require("path");
athens.electron.stream = require("stream");
athens.electron.DB_INDEX = "index.transit";
athens.electron.IMAGES_DIR_NAME = "images";
/**
 * If new-dir/athens already exists, no-op and alert user.
 *   Else copy db to new db location. When there is an images folder, copy /images folder and all images.
 *  file:// image urls in block/string don't get updated, so if original images are deleted, links will be broken.
 */
athens.electron.move_dialog_BANG_ = (function athens$electron$move_dialog_BANG_(){
var res = athens.electron.dialog.showOpenDialogSync(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["openDirectory"], null)], null)));
var new_dir = cljs.core.first(res);
if(cljs.core.truth_(new_dir)){
var curr_db_filepath = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","filepath","db/filepath",1097485287)], null)));
var base_dir = athens.electron.path.dirname(curr_db_filepath);
var base_dir_name = athens.electron.path.basename(base_dir);
var curr_dir_images = athens.electron.path.resolve(base_dir,athens.electron.IMAGES_DIR_NAME);
var new_dir__$1 = athens.electron.path.resolve(new_dir,base_dir_name);
var new_dir_images = athens.electron.path.resolve(new_dir__$1,athens.electron.IMAGES_DIR_NAME);
var new_db_filepath = athens.electron.path.resolve(new_dir__$1,athens.electron.DB_INDEX);
if(cljs.core.truth_(athens.electron.fs.existsSync(new_dir__$1))){
return alert(["Directory ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_dir__$1)," already exists, sorry."].join(''));
} else {
athens.electron.fs.mkdirSync(new_dir__$1);

athens.electron.fs.copyFileSync(curr_db_filepath,new_db_filepath);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),new_db_filepath], null));

if(cljs.core.truth_(athens.electron.fs.existsSync(curr_dir_images))){
athens.electron.fs.mkdirSync(new_dir_images);

var imgs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.electron.path.join(curr_dir_images,x),athens.electron.path.join(new_dir_images,x)], null);
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(athens.electron.fs.readdirSync(curr_dir_images)));
var seq__54839 = cljs.core.seq(imgs);
var chunk__54840 = null;
var count__54841 = (0);
var i__54842 = (0);
while(true){
if((i__54842 < count__54841)){
var vec__54857 = chunk__54840.cljs$core$IIndexed$_nth$arity$2(null,i__54842);
var curr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857,(1),null);
athens.electron.fs.copyFileSync(curr,new$);


var G__55015 = seq__54839;
var G__55016 = chunk__54840;
var G__55017 = count__54841;
var G__55018 = (i__54842 + (1));
seq__54839 = G__55015;
chunk__54840 = G__55016;
count__54841 = G__55017;
i__54842 = G__55018;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54839);
if(temp__5735__auto__){
var seq__54839__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54839__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54839__$1);
var G__55019 = cljs.core.chunk_rest(seq__54839__$1);
var G__55020 = c__4556__auto__;
var G__55021 = cljs.core.count(c__4556__auto__);
var G__55022 = (0);
seq__54839 = G__55019;
chunk__54840 = G__55020;
count__54841 = G__55021;
i__54842 = G__55022;
continue;
} else {
var vec__54864 = cljs.core.first(seq__54839__$1);
var curr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54864,(1),null);
athens.electron.fs.copyFileSync(curr,new$);


var G__55027 = cljs.core.next(seq__54839__$1);
var G__55028 = null;
var G__55029 = (0);
var G__55030 = (0);
seq__54839 = G__55027;
chunk__54840 = G__55028;
count__54841 = G__55029;
i__54842 = G__55030;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Allow user to open db elsewhere from filesystem.
 */
athens.electron.open_dialog_BANG_ = (function athens$electron$open_dialog_BANG_(){
var res = athens.electron.dialog.showOpenDialogSync(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["openFile"], null),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Transit",new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transit"], null)], null)], null)], null)));
var open_file = cljs.core.first(res);
if(cljs.core.truth_((function (){var and__4115__auto__ = open_file;
if(cljs.core.truth_(and__4115__auto__)){
return athens.electron.fs.existsSync(open_file);
} else {
return and__4115__auto__;
}
})())){
var read_db = athens.electron.fs.readFileSync(open_file);
var db = datascript.transit.read_transit_str(read_db);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","watch","fs/watch",380976938),open_file], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),db], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),open_file], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null));
} else {
return null;
}
});
/**
 * Create a new database.
 */
athens.electron.create_dialog_BANG_ = (function athens$electron$create_dialog_BANG_(db_name){
var res = athens.electron.dialog.showOpenDialogSync(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["openDirectory"], null)], null)));
var db_location = cljs.core.first(res);
if(cljs.core.truth_((function (){var and__4115__auto__ = db_location;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_empty(db_name);
} else {
return and__4115__auto__;
}
})())){
var db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),athens.athens_datoms.datoms);
var dir = athens.electron.path.resolve(db_location,db_name);
var dir_images = athens.electron.path.resolve(dir,athens.electron.IMAGES_DIR_NAME);
var db_filepath = athens.electron.path.resolve(dir,athens.electron.DB_INDEX);
if(cljs.core.truth_(athens.electron.fs.existsSync(dir))){
return alert(["Directory ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)," already exists, sorry."].join(''));
} else {
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127)], null));

athens.electron.fs.mkdirSync(dir);

athens.electron.fs.mkdirSync(dir_images);

athens.electron.fs.writeFileSync(db_filepath,datascript.transit.write_transit_str(db));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","watch","fs/watch",380976938),db_filepath], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),db_filepath], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),db], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null));
}
} else {
return null;
}
});
athens.electron.save_image = (function athens$electron$save_image(var_args){
var G__54874 = arguments.length;
switch (G__54874) {
case 2:
return athens.electron.save_image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return athens.electron.save_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.electron.save_image.cljs$core$IFn$_invoke$arity$2 = (function (item,extension){
return athens.electron.save_image.cljs$core$IFn$_invoke$arity$4("","",item,extension);
}));

(athens.electron.save_image.cljs$core$IFn$_invoke$arity$4 = (function (head,tail,item,extension){
var curr_db_filepath = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","filepath","db/filepath",1097485287)], null)));
var curr_db_dir = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","filepath-dir","db/filepath-dir",-1198835573)], null)));
var img_dir = athens.electron.path.resolve(curr_db_dir,athens.electron.IMAGES_DIR_NAME);
var base_dir = athens.electron.path.dirname(curr_db_filepath);
var base_dir_name = athens.electron.path.basename(base_dir);
var file = item.getAsFile();
var img_filename = athens.electron.path.resolve(img_dir,["img-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_dir_name),"-",athens.util.gen_block_uid(),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''));
var reader = (new FileReader());
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),"![](","file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img_filename),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var cb = (function (e){
var img_data = (function (){var x = e.target.result;
var x__$1 = clojure.string.replace_first(x,/data:image\/(jpeg|gif|png);base64,/,"");
return (new Buffer(x__$1,"base64"));
})();
if(cljs.core.truth_(athens.electron.fs.existsSync(img_dir))){
} else {
athens.electron.fs.mkdirSync(img_dir);
}

return athens.electron.fs.writeFileSync(img_filename,img_data);
});
(reader.onload = cb);

reader.readAsDataURL(file);

return new_str;
}));

(athens.electron.save_image.cljs$lang$maxFixedArity = 4);

athens.electron.dnd_image = (function athens$electron$dnd_image(target_uid,drag_target,item,extension){
var new_str = athens.electron.save_image.cljs$core$IFn$_invoke$arity$2(item,extension);
var map__54880 = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var map__54880__$1 = (((((!((map__54880 == null))))?(((((map__54880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54880):map__54880);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54880__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var new_block = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),athens.util.gen_block_uid(),new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","string","block/string",-2066596447),new_str,new cljs.core.Keyword("block","open","block/open",-1875254829),true], null);
var tx_data = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_target,new cljs.core.Keyword(null,"child","child",623967545)))?(function (){var reindex = athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(-1));
var new_children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(reindex,new_block);
var new_target_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new_children], null);
return new_target_block;
})():(function (){var index = (function (){var G__54886 = drag_target;
var G__54886__$1 = (((G__54886 instanceof cljs.core.Keyword))?G__54886.fqn:null);
switch (G__54886__$1) {
case "above":
return (order - (1));

break;
case "below":
return order;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54886__$1)].join('')));

}
})();
var reindex = athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),index);
var new_children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(reindex,new_block);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_children], null);
return new_parent;
})());
return setTimeout((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data], null)], null));
}),(50));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","mtime","db/mtime",963172381),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("db","mtime","db/mtime",963172381).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","filepath","db/filepath",1097485287),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("db","filepath","db/filepath",1097485287).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","filepath-dir","db/filepath-dir",-1198835573),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return athens.electron.path.dirname(new cljs.core.Keyword("db","filepath","db/filepath",1097485287).cljs$core$IFn$_invoke$arity$1(db));
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fs","open-dialog","fs/open-dialog",-1381619732),(function (p__54895,_){
var map__54897 = p__54895;
var map__54897__$1 = (((((!((map__54897 == null))))?(((((map__54897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54897):map__54897);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"db","db",993250759));
alert(["No DB found at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","filepath","db/filepath",1097485287).cljs$core$IFn$_invoke$arity$1(db)),".","\nPlease open or create a new db."].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","toggle","modal/toggle",1389100091)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","get-db-filepath","local-storage/get-db-filepath",-2015649354),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),"db/filepath")], null),(function (p__54908,_){
var map__54909 = p__54908;
var map__54909__$1 = (((((!((map__54909 == null))))?(((((map__54909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54909):map__54909);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),local_storage], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","navigate","local-storage/navigate",-707087458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),"current-route/uid")], null),(function (p__54914,_){
var map__54916 = p__54914;
var map__54916__$1 = (((((!((map__54916 == null))))?(((((map__54916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54916):map__54916);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),local_storage], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fs","create-new-db","fs/create-new-db",-1776807557),(function (){
var DOC_PATH = athens.electron.app.getPath("documents");
var athens_dir = athens.electron.path.resolve(DOC_PATH,"athens");
var db_filepath = athens.electron.path.resolve(athens_dir,athens.electron.DB_INDEX);
var db_images = athens.electron.path.resolve(athens_dir,athens.electron.IMAGES_DIR_NAME);
if(cljs.core.not(athens.electron.fs.existsSync(athens_dir))){
athens.electron.fs.mkdirSync(athens_dir);
} else {
}

if(cljs.core.not(athens.electron.fs.existsSync(db_images))){
athens.electron.fs.mkdirSync(db_images);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fs","write!","fs/write!",-1029545496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_filepath,datascript.transit.write_transit_str(athens.athens_datoms.datoms)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),db_filepath], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","retract-athens-pages","db/retract-athens-pages",-1343762064),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(athens.db.retract_page_recursively("Welcome"),athens.db.retract_page_recursively("Changelog"))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","transact-athens-pages","db/transact-athens-pages",1014350377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.athens_datoms.datoms], null)], null);
}));
/**
 * If modified time is newer, update app-db with m-time. Prevents sync happening after db is written from the app.
 */
athens.electron.sync_db_from_fs = (function athens$electron$sync_db_from_fs(filepath,_filename){
var prev_mtime = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","mtime","db/mtime",963172381)], null)));
var curr_mtime = athens.electron.fs.statSync(filepath).mtime;
var newer_QMARK_ = (prev_mtime < curr_mtime);
if(newer_QMARK_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-mtime","db/update-mtime",768440096),curr_mtime], null));

var read_db = athens.electron.fs.readFileSync(filepath);
var db = datascript.transit.read_transit_str(read_db);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),db], null));
} else {
return null;
}
});
athens.electron.debounce_sync_db_from_fs = goog.functions.debounce(athens.electron.sync_db_from_fs,(1000));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fs","watch","fs/watch",380976938),(function (_,p__54935){
var vec__54939 = p__54935;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54939,(0),null);
var filepath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54939,(1),null);
var dirpath_55086 = athens.electron.path.dirname(filepath);
athens.electron.fs.watch(dirpath_55086,(function (_event,filename){
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["\\b",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),"$"].join('')),filepath))){
return (athens.electron.debounce_sync_db_from_fs.cljs$core$IFn$_invoke$arity$2 ? athens.electron.debounce_sync_db_from_fs.cljs$core$IFn$_invoke$arity$2(filepath,filename) : athens.electron.debounce_sync_db_from_fs.call(null,filepath,filename));
} else {
return null;
}
}));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","update-mtime","db/update-mtime",768440096),(function (db,p__54948){
var vec__54950 = p__54948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54950,(0),null);
var mtime1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54950,(1),null);
var map__54954 = db;
var map__54954__$1 = (((((!((map__54954 == null))))?(((((map__54954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54954):map__54954);
var filepath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54954__$1,new cljs.core.Keyword("db","filepath","db/filepath",1097485287));
var mtime = (function (){var or__4126__auto__ = mtime1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return athens.electron.fs.statSync(filepath).mtime;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","mtime","db/mtime",963172381),mtime);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("desktop","boot","desktop/boot",-656853611),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("local-storage","get-db-filepath","local-storage/get-db-filepath",-2015649354)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),(function (p__54966){
var vec__54967 = p__54966;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54967,(0),null);
var filepath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54967,(1),null);
if((filepath == null)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","create-new-db","fs/create-new-db",-1776807557)], null));
} else {
if(cljs.core.truth_(athens.electron.fs.existsSync(filepath))){
var read_db = athens.electron.fs.readFileSync(filepath);
var db = datascript.transit.read_transit_str(read_db);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","watch","fs/watch",380976938),filepath], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),db], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","open-dialog","fs/open-dialog",-1381619732)], null));

}
}
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword("fs","create-new-db","fs/create-new-db",-1776807557),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","toggle","left-sidebar/toggle",212949860)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("local-storage","set-theme","local-storage/set-theme",747726220)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("local-storage","navigate","local-storage/navigate",-707087458)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","create-new-db","fs/create-new-db",-1776807557),new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract-athens-pages","db/retract-athens-pages",-1343762064)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","transact-athens-pages","db/transact-athens-pages",1014350377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
}));
athens.electron.write_file = (function athens$electron$write_file(filepath,data){
var r = athens.electron.stream.Readable.from(data);
var w = athens.electron.fs.createWriteStream(filepath);
var error_cb = (function (err){
if(cljs.core.truth_(err)){
alert((new Error(err)));

return console.error((new Error(err)));
} else {
return null;
}
});
r.setEncoding("utf8");

r.on("error",error_cb);

w.on("error",error_cb);

w.on("finish",(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","sync","db/sync",-624147024)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","update-mtime","db/update-mtime",768440096),(new Date())], null));
}));

return r.pipe(w);
});
athens.electron.debounce_write = goog.functions.debounce(athens.electron.write_file,(15000));
re_frame.core.reg_fx(new cljs.core.Keyword("fs","write!","fs/write!",-1029545496),(function (p__54991){
var vec__54992 = p__54991;
var filepath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54992,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54992,(1),null);
return (athens.electron.debounce_write.cljs$core$IFn$_invoke$arity$2 ? athens.electron.debounce_write.cljs$core$IFn$_invoke$arity$2(filepath,data) : athens.electron.debounce_write.call(null,filepath,data));
}));

//# sourceMappingURL=athens.electron.js.map
