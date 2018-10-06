    function permissionsConverter(hash, cb){
        if(hash && hash!=""){
            var perms = {
                CREATE_INSTANT_INVITE: 0x1,
                KICK_MEMBERS: 0x2,
                BAN_MEMBERS: 0x4,
                ADMINISTRATOR: 0x8,
                MANAGE_CHANNELS: 0x10,
                MANAGE_GUILD: 0x20,
                CHANGE_NICKNAME: 0x4000000,
                MANAGE_NICKNAMES: 0x8000000,
                MANAGE_ROLES: 0x10000000,
                MANAGE_WEBHOOKS: 0x20000000,
                MANAGE_EMOJIS: 0x40000000,
                VIEW_AUDIT_LOG: 0x80,
                VIEW_CHANNEL: 0x400,
                CONNECT: 0x100000,
                SPEAK: 0x200000,
                MUTE_MEMBERS: 0x400000,
                DEAFEN_MEMBERS: 0x800000,
                MOVE_MEMBERS: 0x1000000,
                USE_VAD: 0x2000000,
                PRIORITY_SPEAKER: 0x100,
                ADD_REACTIONS: 0x40,
                VIEW_CHANNEL: 0x400,
                SEND_MESSAGES: 0x800,
                SEND_TTS_MESSAGES: 0x1000,
                MANAGE_MESSAGES: 0x2000,
                EMBED_LINKS: 0x4000,
                ATTACH_FILES: 0x8000,
                READ_MESSAGE_HISTORY: 0x10000,
                MENTION_EVERYONE: 0x20000,
                USE_EXTERNAL_EMOJIS: 0x40000,
            };
            permsArray = [];
            if(hash.length > 1) {
                for(let key in perms) {
                    if(hash.substring(1) & perms[key]) {
                        permsArray.push(key)
                    }
                }
            }
            cb(permsArray);
        }
    }
