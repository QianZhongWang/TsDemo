declare function create(obj:object|null):void;
create({prop:1})
create(null)

/*错误额提示*/
// create(42)
// create('string')
// create(false)
// create(undefined)