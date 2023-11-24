module.exports = {
    name: "8ball",
    type: "messageCreate",
    code: `$arrayLoad[words;|;Yup. That’s right!|Absolutely not. Not a chance.|Uhh… I think so-!|Hm… I’m not sure… probably not.|Who knows? Maybe~|Huh..? Of course! What a dumb question. |I plead the fifth. I’m not answering that.|maaaaaaybeee…?]
$setVar[winningword;$authorID;$arrayAt[words;$math[$floor[$randomNumber[1;$arrayLength[words]]]]]]
$sendMessage[$channelID;$description[$userDisplayName[$authorID] asked- $message
-$getVar[winningword;$authorID]]
$footer[8ball Fetched | $timestamp] $color[Random]$author[🖼 Utility Tool]]`
}
