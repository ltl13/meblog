import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class SingleCommentFooter extends StatelessWidget {
  const SingleCommentFooter({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        ChangeNotifierProvider<ValueNotifier<bool>>(
          create: (context) => ValueNotifier<bool>(false),
          builder: (context, child) {
            final _isLikeProvider = Provider.of<ValueNotifier<bool>>(context);
            return TextButton.icon(
              style: TextButton.styleFrom(primary: myHighlightColor),
              onPressed: () => _isLikeProvider.value = !_isLikeProvider.value,
              icon: Icon(
                _isLikeProvider.value
                    ? Icons.thumb_up
                    : Icons.thumb_up_outlined,
                size: 16.sp,
              ),
              label: Text(
                "13.2k",
                style: TextStyle(
                  fontSize: 12.sp,
                  fontFamily: 'Roboto',
                ),
              ),
            );
          },
        ),
        TextButton.icon(
          style: TextButton.styleFrom(primary: myHighlightColor),
          onPressed: () {},
          icon: Icon(
            Icons.chat_bubble_outline,
            size: 16.sp,
          ),
          label: Text(
            "Show replies",
            style: TextStyle(fontFamily: 'Roboto', fontSize: 12.sp),
          ),
        ),
        const Expanded(child: SizedBox()),
        TextButton(
          onPressed: () {},
          child: Text(
            "Reply".toUpperCase(),
            style: TextStyle(
              fontSize: 12.sp,
              color: myHighlightColor,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ],
    );
  }
}
