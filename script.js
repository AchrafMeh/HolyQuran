document.addEventListener("DOMContentLoaded", function() {
    const surahs = {
        "النبأ": "عَمَّ يَتَسَآءَلُونَ (1) عَنِ ٱلنَّبَإِ ٱلۡعَظِيمِ (2) ٱلَّذِي هُمۡ فِيهِ مُخۡتَلِفُونَ (3) كَلَّا سَيَعۡلَمُونَ (4) ثُمَّ كَلَّا سَيَعۡلَمُونَ (5) أَلَمۡ نَجۡعَلِ ٱلۡأَرۡضَ مِهَٰدٗا (6) وَٱلۡجِبَالَ أَوۡتَادٗا (7) وَخَلَقۡنَٰكُمۡ أَزۡوَٰجٗا (8) وَجَعَلۡنَا نَوۡمَكُمۡ سُبَاتٗا (9) وَجَعَلۡنَا ٱلَّيۡلَ لِبَاسٗا (10) وَجَعَلۡنَا ٱلنَّهَارَ مَعَاشٗا (11) وَبَنَيۡنَا فَوۡقَكُمۡ سَبۡعٗا شِدَادٗا (12) وَجَعَلۡنَا سِرَاجٗا وَهَّاجٗا (13) وَأَنزَلۡنَا مِنَ ٱلۡمُعۡصِرَٰتِ مَآءٗ ثَجَّاجٗا (14) لِّنُخۡرِجَ بِهِۦ حَبّٗا وَنَبَاتٗا (15) وَجَنَّٰتٍ أَلۡفَافًا (16) إِنَّ يَوۡمَ ٱلۡفَصۡلِ كَانَ مِيقَٰتٗا (17) يَوۡمَ يُنفَخُ فِي ٱلصُّورِ فَتَأۡتُونَ أَفۡوَاجٗا (18) وَفُتِحَتِ ٱلسَّمَآءُ فَكَانَتۡ أَبۡوَٰبٗا (19) وَسُيِّرَتِ ٱلۡجِبَالُ فَكَانَتۡ سَرَابًا (20) إِنَّ جَهَنَّمَ كَانَتۡ مِرۡصَادٗا (21) لِّلطَّٰغِينَ مَـَٔابٗا (22) لَّٰبِثِينَ فِيهَآ أَحۡقَابٗا (23) لَّا يَذُوقُونَ فِيهَا بَرۡدٗا وَلَا شَرَابًا (24) إِلَّا حَمِيمٗا وَغَسَّاقٗا (25) جَزَآءٗ وِفَاقًا (26) إِنَّهُمۡ كَانُواْ لَا يَرۡجُونَ حِسَابٗا (27) وَكَذَّبُواْ بِـَٔايَٰتِنَا كِذَّابٗا (28) وَكُلَّ شَيۡءٍ أَحۡصَيۡنَٰهُ كِتَٰبٗا (29) فَذُوقُواْ فَلَن نَّزِيدَكُمۡ إِلَّا عَذَابًا (30) إِنَّ لِلۡمُتَّقِينَ مَفَازًا (31) حَدَآئِقَ وَأَعۡنَٰبٗا (32) وَكَوَاعِبَ أَتۡرَابٗا (33) وَكَأۡسٗا دِهَاقٗا (34) لَّا يَسۡمَعُونَ فِيهَا لَغۡوٗا وَلَا كِذَّٰبٗا (35) جَزَآءٗ مِّن رَّبِّكَ عَطَآءً حِسَابٗا (36) رَّبِّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَا ٱلرَّحۡمَٰنِۖ لَا يَمۡلِكُونَ مِنۡهُ خِطَابٗا (37) يَوۡمَ يَقُومُ ٱلرُّوحُ وَٱلۡمَلَٰٓئِكَةُ صَفّٗاۖ لَّا يَتَكَلَّمُونَ إِلَّا مَنۡ أَذِنَ لَهُ ٱلرَّحۡمَٰنُ وَقَالَ صَوَابٗا (38) ذَٰلِكَ ٱلۡيَوۡمُ ٱلۡحَقُّۖ فَمَن شَآءَ ٱتَّخَذَ إِلَىٰ رَبِّهِۦ مَـَٔابًا (39) إِنَّآ أَنذَرۡنَٰكُمۡ عَذَابٗا قَرِيبٗا يَوۡمَ يَنظُرُ ٱلۡمَرۡءُ مَا قَدَّمَتۡ يَدَاهُ وَيَقُولُ ٱلۡكَافِرُ يَٰلَيۡتَنِي كُنتُ تُرَٰبَۢا (40)",
        "عبس": "وَٱلنَّٰزِعَٰتِ غَرۡقٗا (1) وَٱلنَّٰشِطَٰتِ نَشۡطٗا (2) وَٱلسَّٰبِحَٰتِ سَبۡحٗا (3) فَٱلسَّٰبِقَٰتِ سَبۡقٗا (4) فَٱلۡمُدَبِّرَٰتِ أَمۡرٗا (5) يَوۡمَ تَرۡجُفُ ٱلرَّاجِفَةُ (6) تَتۡبَعُهَا ٱلرَّادِفَةُ (7) قُلُوبٞ يَوۡمَئِذٖ وَاجِفَةٌ (8) أَبۡصَٰرُهَا خَٰشِعَةٞ (9) يَقُولُونَ أَءِنَّا لَمَرۡدُودُونَ فِي ٱلۡحَافِرَةِ (10) أَءِذَا كُنَّا عِظَٰمٗا نَّخِرَةٗ (11) قَالُواْ تِلۡكَ إِذٗا كَرَّةٌ خَاسِرَةٞ (12) فَإِنَّمَا هِيَ زَجۡرَةٞ وَٰحِدَةٞ (13) فَإِذَا هُم بِٱلسَّاهِرَةِ (14) هَلۡ أَتَىٰكَ حَدِيثُ مُوسَىٰٓ (15) إِذۡ نَادَىٰهُ رَبُّهُۥ بِٱلۡوَادِ ٱلۡمُقَدَّسِ طُوًى (16) ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ إِنَّهُۥ طَغَىٰ (17) فَقُلۡ هَل لَّكَ إِلَىٰٓ أَن تَزَكَّىٰ (18) وَأَهۡدِيَكَ إِلَىٰ رَبِّكَ فَتَخۡشَىٰ (19) فَأَرَىٰهُ ٱلۡأٓيَةَ ٱلۡكُبۡرَىٰ (20) فَكَذَّبَ وَعَصَىٰ (21) ثُمَّ أَدۡبَرَ يَسۡعَىٰ (22) فَحَشَرَ فَنَادَىٰ (23) فَقَالَ أَنَا۠ رَبُّكُمُ ٱلۡأَعۡلَىٰ (24) فَأَخَذَهُ ٱللَّهُ نَكَالَ ٱلۡأٓخِرَةِ وَٱلۡأُولَىٰٓ (25) إِنَّ فِي ذَٰلِكَ لَعِبۡرَةٗ لِّمَن يَخۡشَىٰٓ (26) ءَأَنتُمۡ أَشَدُّ خَلۡقًا أَمِ ٱلسَّمَآءُۚ بَنَىٰهَا (27) رَفَعَ سَمۡكَهَا فَسَوَّىٰهَا (28) وَأَغۡطَشَ لَيۡلَهَا وَأَخۡرَجَ ضُحَىٰهَا (29) وَٱلۡأَرۡضَ بَعۡدَ ذَٰلِكَ دَحَىٰهَآ (30) أَخۡرَجَ مِنۡهَا مَآءَهَا وَمَرۡعَىٰهَا (31) وَٱلۡجِبَالَ أَرۡسَىٰهَا (32) مَتَٰعٗا لَّكُمۡ وَ لِأَنۡعَٰمِكُمۡ (33) فَإِذَا جَآءَتِ ٱلطَّآمَّةُ ٱلۡكُبۡرَىٰ (34) يَوۡمَ يَتَذَكَّرُ ٱلۡإِنسَٰنُ مَا سَعَىٰ (35) وَبُرِّزَتِ ٱلۡجَحِيمُ لِمَن يَرَىٰ (36) فَأَمَّا مَن طَغَىٰ (37) وَءَاثَرَ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا (38) فَإِنَّ ٱلۡجَحِيمَ هِيَ ٱلۡمَأۡوَىٰ (39) وَأَمَّا مَنۡ خَافَ مَقَامَ رَبِّهِۦ وَنَهَى ٱلنَّفۡسَ عَنِ ٱلۡهَوَىٰ (40) فَإِنَّ ٱلۡجَنَّةَ هِيَ ٱلۡمَأۡوَىٰ (41) يَسۡـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرۡسَىٰهَا (42) فِيمَ أَنتَ مِن ذِكۡرَىٰهَآ (43) إِلَىٰ رَبِّكَ مُنتَهَىٰهَآ (44) إِنَّمَآ أَنتَ مُنذِرُ مَن يَخۡشَىٰهَا (45) كَأَنَّهُمۡ يَوۡمَ يَرَوۡنَهَا لَمۡ يَلۡبَثُوٓاْ إِلَّا عَشِيَّةً أَوۡ ضُحَىٰهَا (46)",
        "النازعات": "وَٱلنَّٰزِعَٰتِ غَرۡقٗا (1) وَٱلنَّٰشِطَٰتِ نَشۡطٗا (2) وَٱلسَّٰبِحَٰتِ سَبۡحٗا (3) فَٱلسَّٰبِقَٰتِ سَبۡقٗا (4) فَٱلۡمُدَبِّرَٰتِ أَمۡرٗا (5) يَوۡمَ تَرۡجُفُ ٱلرَّاجِفَةُ (6) تَتۡبَعُهَا ٱلرَّادِفَةُ (7) قُلُوبٞ يَوۡمَئِذٖ وَاجِفَةٌ (8) أَبۡصَٰرُهَا خَٰشِعَةٞ (9) يَقُولُونَ أَءِنَّا لَمَرۡدُودُونَ فِي ٱلۡحَافِرَةِ (10) أَءِذَا كُنَّا عِظَٰمٗا نَّخِرَةٗ (11) قَالُواْ تِلۡكَ إِذٗا كَرَّةٌ خَاسِرَةٞ (12) فَإِنَّمَا هِيَ زَجۡرَةٞ وَٰحِدَةٞ (13) فَإِذَا هُم بِٱلسَّاهِرَةِ (14) هَلۡ أَتَىٰكَ حَدِيثُ مُوسَىٰٓ (15) إِذۡ نَادَىٰهُ رَبُّهُۥ بِٱلۡوَادِ ٱلۡمُقَدَّسِ طُوًى (16) ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ إِنَّهُۥ طَغَىٰ (17) فَقُلۡ هَل لَّكَ إِلَىٰٓ أَن تَزَكَّىٰ (18) وَأَهۡدِيَكَ إِلَىٰ رَبِّكَ فَتَخۡشَىٰ (19) فَأَرَىٰهُ ٱلۡأٓيَةَ ٱلۡكُبۡرَىٰ (20) فَكَذَّبَ وَعَصَىٰ (21) ثُمَّ أَدۡبَرَ يَسۡعَىٰ (22) فَحَشَرَ فَنَادَىٰ (23) فَقَالَ أَنَا۠ رَبُّكُمُ ٱلۡأَعۡلَىٰ (24) فَأَخَذَهُ ٱللَّهُ نَكَالَ ٱلۡأٓخِرَةِ وَٱلۡأُولَىٰٓ (25) إِنَّ فِي ذَٰلِكَ لَعِبۡرَةٗ لِّمَن يَخۡشَىٰٓ (26) ءَأَنتُمۡ أَشَدُّ خَلۡقًا أَمِ ٱلسَّمَآءُۚ بَنَىٰهَا (27) رَفَعَ سَمۡكَهَا فَسَوَّىٰهَا (28) وَأَغۡطَشَ لَيۡلَهَا وَأَخۡرَجَ ضُحَىٰهَا (29) وَٱلۡأَرۡضَ بَعۡدَ ذَٰلِكَ دَحَىٰهَآ (30) أَخۡرَجَ مِنۡهَا مَآءَهَا وَمَرۡعَىٰهَا (31) وَٱلۡجِبَالَ أَرۡسَىٰهَا (32) مَتَٰعٗا لَّكُمۡ وَ لِأَنۡعَٰمِكُمۡ (33) فَإِذَا جَآءَتِ ٱلطَّآمَّةُ ٱلۡكُبۡرَىٰ (34) يَوۡمَ يَتَذَكَّرُ ٱلۡإِنسَٰنُ مَا سَعَىٰ (35) وَبُرِّزَتِ ٱلۡجَحِيمُ لِمَن يَرَىٰ (36) فَأَمَّا مَن طَغَىٰ (37) وَءَاثَرَ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا (38) فَإِنَّ ٱلۡجَحِيمَ هِيَ ٱلۡمَأۡوَىٰ (39) وَأَمَّا مَنۡ خَافَ مَقَامَ رَبِّهِۦ وَنَهَى ٱلنَّفۡسَ عَنِ ٱلۡهَوَىٰ (40) فَإِنَّ ٱلۡجَنَّةَ هِيَ ٱلۡمَأۡوَىٰ (41) يَسۡـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرۡسَىٰهَا (42) فِيمَ أَنتَ مِن ذِكۡرَىٰهَآ (43) إِلَىٰ رَبِّكَ مُنتَهَىٰهَآ (44) إِنَّمَآ أَنتَ مُنذِرُ مَن يَخۡشَىٰهَا (45) كَأَنَّهُمۡ يَوۡمَ يَرَوۡنَهَا لَمۡ يَلۡبَثُوٓاْ إِلَّا عَشِيَّةً أَوۡ ضُحَىٰهَا (46)",
        "التكوير":  "إِذَا ٱلشَّمۡسُ كُوِّرَتۡ (1) وَإِذَا ٱلنُّجُومُ ٱنكَدَرَتۡ (2) وَإِذَا ٱلۡجِبَالُ سُيِّرَتۡ (3) وَإِذَا ٱلۡعِشَارُ عُطِّلَتۡ (4) وَإِذَا ٱلۡوُحُوشُ حُشِرَتۡ (5) وَإِذَا ٱلۡبِحَارُ سُجِّرَتۡ (6) وَإِذَا ٱلنُّفُوسُ زُوِّجَتۡ (7) وَإِذَا ٱلۡمَوۡءُۥدَةُ سُئِلَتۡ (8) بِأَيِّ ذَنۢبٖ قُتِلَتۡ (9) وَإِذَا ٱلصُّحُفُ نُشِرَتۡ (10) وَإِذَا ٱلسَّمَآءُ كُشِطَتۡ (11) وَإِذَا ٱلۡجَحِيمُ سُعِّرَتۡ (12) وَإِذَا ٱلۡجَنَّةُ أُزۡلِفَتۡ (13) عَلِمَتۡ نَفۡسٞ مَّآ أَحۡضَرَتۡ (14) فَلَآ أُقۡسِمُ بِٱلۡخُنَّسِ (15) ٱلۡجَوَارِ ٱلۡكُنَّسِ (16) وَٱلَّيۡلِ إِذَا عَسۡعَسَ (17) وَٱلصُّبۡحِ إِذَا تَنَفَّسَ (18) إِنَّهُۥ لَقَوۡلُ رَسُولٖ كَرِيمٖ (19) ذِي قُوَّةٍ عِندَ ذِي ٱلۡعَرۡشِ مَكِينٖ (20) مُّطَاعٖ ثَمَّ أَمِينٖ (21) وَمَا صَاحِبُكُم بِمَجۡنُونٖ (22) وَلَقَدۡ رَءَاهُ بِٱلۡأُفُقِ ٱلۡمُبِينِ (23) وَمَا هُوَ عَلَى ٱلۡغَيۡبِ بِضَنِينٖ (24) وَمَا هُوَ بِقَوۡلِ شَيۡطَٰنٖ رَّجِيمٖ (25) فَأَيۡنَ تَذۡهَبُونَ (26) إِنۡ هُوَ إِلَّا ذِكۡرٞ لِّلۡعَٰلَمِينَ (27) لِمَن شَآءَ مِنكُمۡ أَن يَسۡتَقِيمَ (28) وَمَا تَشَآءُونَ إِلَّآ أَن يَشَآءَ ٱللَّهُ رَبُّ ٱلۡعَٰلَمِينَ (29)",
        "الإنفطار":  "إِذَا ٱلسَّمَآءُ ٱنفَطَرَتۡ (1) وَإِذَا ٱلۡكَوَاكِبُ ٱنتَثَرَتۡ (2) وَإِذَا ٱلۡبِحَارُ فُجِّرَتۡ (3) وَإِذَا ٱلۡقُبُورُ بُعۡثِرَتۡ (4) عَلِمَتۡ نَفۡسٞ مَّا قَدَّمَتۡ وَأَخَّرَتۡ (5) يَٰٓأَيُّهَا ٱلۡإِنسَٰنُ مَا غَرَّكَ بِرَبِّكَ ٱلۡكَرِيمِ (6) ٱلَّذِي خَلَقَكَ فَسَوَّىٰكَ فَعَدَلَكَ (7) فِيٓ أَيِّ صُورَةٖ مَّا شَآءَ رَكَّبَكَ (8) كَلَّا بَلۡ تُكَذِّبُونَ بِٱلدِّينِ (9) وَإِنَّ عَلَيۡكُمۡ لَحَٰفِظِينَ (10) كِرَامٗا كَٰتِبِينَ (11) يَعۡلَمُونَ مَا تَفۡعَلُونَ (12) إِنَّ ٱلۡأَبۡرَارَ لَفِي نَعِيمٖ (13) وَإِنَّ ٱلۡفُجَّارَ لَفِي جَحِيمٖ (14) يَصۡلَوۡنَهَا يَوۡمَ ٱلدِّينِ (15) وَمَا هُمۡ عَنۡهَا بِغَآئِبِينَ (16) وَمَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ (17) ثُمَّ مَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ (18) يَوۡمَ لَا تَمۡلِكُ نَفۡسٞ لِّنَفۡسٖ شَيۡـٔٗاۖ وَٱلۡأَمۡرُ يَوۡمَئِذٖ لِّلَّهِ (19)",
        "المطففين": "وَيۡلٞ لِّلۡمُطَفِّفِينَ (1) ٱلَّذِينَ إِذَا ٱكۡتَالُواْ عَلَى ٱلنَّاسِ يَسۡتَوۡفُونَ (2) وَإِذَا كَالُوهُمۡ أَو وَّزَنُوهُمۡ يُخۡسِرُونَ (3) أَلَا يَظُنُّ أُوْلَٰٓئِكَ أَنَّهُم مَّبۡعُوثُونَ (4) لِيَوۡمٍ عَظِيمٖ (5) يَوۡمَ يَقُومُ ٱلنَّاسُ لِرَبِّ ٱلۡعَٰلَمِينَ (6) كَلَّآ إِنَّ كِتَٰبَ ٱلۡفُجَّارِ لَفِي سِجِّينٖ (7) وَمَآ أَدۡرَىٰكَ مَا سِجِّينٞ (8) كِتَٰبٞ مَّرۡقُومٞ (9) وَيۡلٞ يَوۡمَئِذٖ لِّلۡمُكَذِّبِينَ (10) ٱلَّذِينَ يُكَذِّبُونَ بِيَوۡمِ ٱلدِّينِ (11) وَمَا يُكَذِّبُ بِهِۦٓ إِلَّا كُلُّ مُعۡتَدٍ أَثِيمٍ (12) إِذَا تُتۡلَىٰ عَلَيۡهِ ءَايَٰتُنَا قَالَ أَسَٰطِيرُ ٱلۡأَوَّلِينَ (13) كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُواْ يَكۡسِبُونَ (14) كَلَّآ إِنَّهُمۡ عَن رَّبِّهِمۡ يَوۡمَئِذٖ لَّمَحۡجُوبُونَ (15) ثُمَّ إِنَّهُمۡ لَصَالُواْ ٱلۡجَحِيمِ (16) ثُمَّ يُقَالُ هَٰذَا ٱلَّذِي كُنتُم بِهِۦ تُكَذِّبُونَ (17) كَلَّآ إِنَّ كِتَٰبَ ٱلۡأَبۡرَارِ لَفِي عِلِّيِّينَ (18) وَمَآ أَدۡرَىٰكَ مَا عِلِّيُّونَ (19) كِتَٰبٞ مَّرۡقُومٞ (20) يَشۡهَدُهُ ٱلۡمُقَرَّبُونَ (21) إِنَّ ٱلۡأَبۡرَارَ لَفِي نَعِيمٍ (22) عَلَى ٱلۡأَرَآئِكِ يَنظُرُونَ (23) تَعۡرِفُ فِي وُجُوهِهِمۡ نَضۡرَةَ ٱلنَّعِيمِ (24) يُسۡقَوۡنَ مِن رَّحِيقٖ مَّخۡتُومٍ (25) خِتَٰمُهُۥ مِسۡكٞۚ وَفِي ذَٰلِكَ فَلۡيَتَنَافَسِ ٱلۡمُتَنَٰفِسُونَ (26) وَمِزَاجُهُۥ مِن تَسۡنِيمٍ (27) عَيۡنٗا يَشۡرَبُ بِهَا ٱلۡمُقَرَّبُونَ (28) إِنَّ ٱلَّذِينَ أَجۡرَمُواْ كَانُواْ مِنَ ٱلَّذِينَ ءَامَنُواْ يَضۡحَكُونَ (29) وَإِذَا مَرُّواْ بِهِمۡ يَتَغَامَزُونَ (30) وَإِذَا ٱنقَلَبُوٓاْ إِلَىٰٓ أَهۡلِهِمُ ٱنقَلَبُواْ فَكِهِينَ (31) وَإِذَا رَأَوۡهُمۡ قَالُوٓاْ إِنَّ هَٰٓؤُلَآءِ لَضَآلُّونَ (32) وَمَآ أُرۡسِلُواْ عَلَيۡهِمۡ حَٰفِظِينَ (33) فَٱلۡيَوۡمَ ٱلَّذِينَ ءَامَنُواْ مِنَ ٱلۡكُفَّارِ يَضۡحَكُونَ (34) عَلَى ٱلۡأَرَآئِكِ يَنظُرُونَ (35) هَلۡ ثُوِّبَ ٱلۡكُفَّارُ مَا كَانُواْ يَفۡعَلُونَ (36)",
        "الإنشقاق": "إِذَا ٱلسَّمَآءُ ٱنشَقَّتۡ (1) وَأَذِنَتۡ لِرَبِّهَا وَحُقَّتۡ (2) وَإِذَا ٱلۡأَرۡضُ مُدَّتۡ (3) وَأَلۡقَتۡ مَا فِيهَا وَتَخَلَّتۡ (4) وَأَذِنَتۡ لِرَبِّهَا وَحُقَّتۡ (5) يَٰٓأَيُّهَا ٱلۡإِنسَٰنُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدۡحٗا فَمُلَٰقِيهِ (6) فَأَمَّا مَنۡ أُوتِيَ كِتَٰبَهُۥ بِيَمِينِهِۦ (7) فَسَوۡفَ يُحَاسَبُ حِسَابٗا يَسِيرٗا (8) وَيَنقَلِبُ إِلَىٰٓ أَهۡلِهِۦ مَسۡرُورٗا (9) وَأَمَّا مَنۡ أُوتِيَ كِتَٰبَهُۥ وَرَآءَ ظَهۡرِهِۦ (10) فَسَوۡفَ يَدۡعُواْ ثُبُورٗا (11) وَيَصۡلَىٰ سَعِيرًا (12) إِنَّهُۥ كَانَ فِيٓ أَهۡلِهِۦ مَسۡرُورًا (13) إِنَّهُۥ ظَنَّ أَن لَّن يَحُورَ (14) بَلَىٰٓۚ إِنَّ رَبَّهُۥ كَانَ بِهِۦ بَصِيرٗا (15) فَلَآ أُقۡسِمُ بِٱلشَّفَقِ (16) وَٱلَّيۡلِ وَمَا وَسَقَ (17) وَٱلۡقَمَرِ إِذَا ٱتَّسَقَ (18) لَتَرۡكَبُنَّ طَبَقًا عَن طَبَقٖ (19) فَمَا لَهُمۡ لَا يُؤۡمِنُونَ (20) وَإِذَا قُرِئَ عَلَيۡهِمُ ٱلۡقُرۡءَانُ لَا يَسۡجُدُونَۤ۩ (21) بَلِ ٱلَّذِينَ كَفَرُواْ يُكَذِّبُونَ (22) وَٱللَّهُ أَعۡلَمُ بِمَا يُوعُونَ (23) فَبَشِّرۡهُم بِعَذَابٍ أَلِيمٍ (24) إِلَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُمۡ أَجۡرٌ غَيۡرُ مَمۡنُونِۭ (25)",
        "البروج": "وَٱلسَّمَآءِ ذَاتِ ٱلۡبُرُوجِ (1) وَٱلۡيَوۡمِ ٱلۡمَوۡعُودِ (2) وَشَاهِدٖ وَمَشۡهُودٖ (3) قُتِلَ أَصۡحَٰبُ ٱلۡأُخۡدُودِ (4) ٱلنَّارِ ذَاتِ ٱلۡوَقُودِ (5) إِذۡ هُمۡ عَلَيۡهَا قُعُودٞ (6) وَهُمۡ عَلَىٰ مَا يَفۡعَلُونَ بِٱلۡمُؤۡمِنِينَ شُهُودٞ (7) وَمَا نَقَمُواْ مِنۡهُمۡ إِلَّآ أَن يُؤۡمِنُواْ بِٱللَّهِ ٱلۡعَزِيزِ ٱلۡحَمِيدِ (8) ٱلَّذِي لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ شَهِيدٌ (9) إِنَّ ٱلَّذِينَ فَتَنُواْ ٱلۡمُؤۡمِنِينَ وَٱلۡمُؤۡمِنَٰتِ ثُمَّ لَمۡ يَتُوبُواْ فَلَهُمۡ عَذَابُ جَهَنَّمَ وَلَهُمۡ عَذَابُ ٱلۡحَرِيقِ (10) إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۚ ذَٰلِكَ ٱلۡفَوۡزُ ٱلۡكَبِيرُ (11) إِنَّ بَطۡشَ رَبِّكَ لَشَدِيدٌ (12) إِنَّهُۥ هُوَ يُبۡدِئُ وَيُعِيدُ (13) وَهُوَ ٱلۡغَفُورُ ٱلۡوَدُودُ (14) ذُو ٱلۡعَرۡشِ ٱلۡمَجِيدُ (15) فَعَّالٞ لِّمَا يُرِيدُ (16) هَلۡ أَتَىٰكَ حَدِيثُ ٱلۡجُنُودِ (17) فِرۡعَوۡنَ وَثَمُودَ (18) بَلِ ٱلَّذِينَ كَفَرُواْ فِي تَكۡذِيبٖ (19) وَٱللَّهُ مِن وَرَآئِهِم مُّحِيطُۢ (20) بَلۡ هُوَ قُرۡءَانٞ مَّجِيدٞ (21) فِي لَوۡحٖ مَّحۡفُوظِۭ (22)",
        "الطارق": "وَٱلسَّمَآءِ وَٱلطَّارِقِ (1) وَمَآ أَدۡرَىٰكَ مَا ٱلطَّارِقُ (2) ٱلنَّجۡمُ ٱلثَّاقِبُ (3) إِن كُلُّ نَفۡسٖ لَّمَّا عَلَيۡهَا حَافِظٞ (4) فَلۡيَنظُرِ ٱلۡإِنسَٰنُ مِمَّ خُلِقَ (5) خُلِقَ مِن مَّآءٖ دَافِقٖ (6) يَخۡرُجُ مِنۢ بَيۡنِ ٱلصُّلۡبِ وَٱلتَّرَآئِبِ (7) إِنَّهُۥ عَلَىٰ رَجۡعِهِۦ لَقَادِرٞ (8) يَوۡمَ تُبۡلَى ٱلسَّرَآئِرُ (9) فَمَا لَهُۥ مِن قُوَّةٖ وَلَا نَاصِرٖ (10) وَٱلسَّمَآءِ ذَاتِ ٱلرَّجۡعِ (11) وَٱلۡأَرۡضِ ذَاتِ ٱلصَّدۡعِ (12) إِنَّهُۥ لَقَوۡلٞ فَصۡلٞ (13) وَمَا هُوَ بِٱلۡهَزۡلِ (14) إِنَّهُمۡ يَكِيدُونَ كَيۡدٗا (15) وَأَكِيدُ كَيۡدٗا (16) فَمَهِّلِ ٱلۡكَٰفِرِينَ أَمۡهِلۡهُمۡ رُوَيۡدَۢا (17)",
        "الأعلى": "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى (1) الَّذِي خَلَقَ فَسَوَّى (2) ...",
        "الغاشية": "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ (1) وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ (2) ...",
        "الفجر": "وَالْفَجْرِ (1) وَلَيَالٍ عَشْرٍ (2) ...",
        "البلد": "لَا أُقْسِمُ بِهَذَا الْبَلَدِ (1) وَأَنتَ حِلٌّ بِهَذَا الْبَلَدِ (2) ...",
        "الشمس": "وَالشَّمْسِ وَضُحَاهَا (1) وَالْقَمَرِ إِذَا تَلَاهَا (2) ...",
        "الليل": "وَاللَّيْلِ إِذَا يَغْشَى (1) وَالنَّهَارِ إِذَا تَجَلَّى (2) ...",
        "الضحى": "وَالضُّحَى (1) وَاللَّيْلِ إِذَا سَجَى (2) ...",
        "الشرح": "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ (1) وَوَضَعْنَا عَنكَ وِزْرَكَ (2) ...",
        "التين": "وَالتِّينِ وَالزَّيْتُونِ (1) وَطُورِ سِينِينَ (2) ...",
        "العلق": "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ (1) خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ (2) ...",
        "القدر": "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ (1) وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ (2) ...",
        "البينة": "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ ...",
        "الزلزلة": "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا (1) وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا (2) ...",
        "العاديات": "وَالْعَادِيَاتِ ضَبْحًا (1) فَالْمُورِيَاتِ قَدْحًا (2) ...",
        "القارعة": "الْقَارِعَةُ (1) مَا الْقَارِعَةُ (2) ...",
        "التكاثر": "أَلْهَاكُمُ التَّكَاثُرُ (1) حَتَّى زُرْتُمُ الْمَقَابِرَ (2) ...",
        "العصر": "وَالْعَصْرِ (1) إِنَّ الْإِنسَانَ لَفِي خُسْرٍ (2) ...",
        "الهمزة": "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ (1) ...",
        "الفيل": "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ (1) ...",
        "قريش": "لِإِيلَافِ قُرَيْشٍ (1) ...",
        "الماعون": "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ (1) ...",
        "الكوثر": "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ (1) ...",
        "الكافرون": "قُلْ يَا أَيُّهَا الْكَافِرُونَ (1) ...",
        "النصر": "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ (1) ...",
        "المسد": "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ (1) ...",
        "الإخلاص": "قُلْ هُوَ اللَّهُ أَحَدٌ (1) ...",
        "الفلق": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) ...",
        "الناس": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) ..."
    };
    
    const surahList = document.getElementById("surah-list");
    const surahText = document.createElement("div");
    surahText.id = "surah-text";
    surahText.classList.add("hidden");
    document.body.appendChild(surahText);
    
    const surahTitle = document.createElement("h2");
    const surahContent = document.createElement("p");
    const closeButton = document.createElement("button");
    closeButton.textContent = "إغلاق";
    closeButton.onclick = function() {
        surahText.classList.add("hidden");
    };
    
    surahText.appendChild(surahTitle);
    surahText.appendChild(surahContent);
    surahText.appendChild(closeButton);
    
    Object.keys(surahs).forEach(surah => {
        let div = document.createElement("div");
        div.className = "surah";
        div.textContent = surah;
        div.onclick = function() {
            surahTitle.textContent = surah;
            surahContent.textContent = surahs[surah];
            surahText.classList.remove("hidden");
        };
        surahList.appendChild(div);
    });
});
