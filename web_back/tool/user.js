var user = {
    login: function(Options) {
        $.ajax({
            type: 'post',
            url: URL_DENGLU,
            data: Options.data,
            success: Options.callback
        })
    },
    logout: function(Options) {
        $.ajax({
            type: 'post',
            url: URL_TUICHU,
            success: Options.callback,

        })
    },
    xiugai: function(Options) {

        $.ajax({
            url: URL_GETUSER,
            success: Options.callback
        })

    }


}