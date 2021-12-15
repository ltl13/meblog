import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/comment/components/single_comment_footer.dart';
import 'package:mobile/views/comment/components/single_comment_header.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';
import 'package:mobile/models/comments.dart';

class SingleComment extends StatelessWidget {
  final Comment comment;
  const SingleComment({
    Key? key,
    required this.comment,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ValueNotifier<bool>>(
        create: (context) => ValueNotifier<bool>(false),
        builder: (context, snapshot) {
          return Container(
            padding: const EdgeInsets.symmetric(horizontal: myPadding),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SingleCommentHeader(comment: comment),
                LayoutBuilder(
                  builder: (context, size) {
                    final style = TextStyle(
                      color: myTextColor,
                      fontFamily: 'Roboto',
                      fontSize: 14.sp,
                    );
                    final span = TextSpan(text: comment.content, style: style);
                    final textPainter = TextPainter(
                      text: span,
                      maxLines: 3,
                      textDirection: TextDirection.ltr,
                    );
                    textPainter.layout(maxWidth: size.maxWidth);
                    if (textPainter.didExceedMaxLines) {
                      return ChangeNotifierProvider<ValueNotifier<bool>>(
                          create: (context) => ValueNotifier<bool>(false),
                          builder: (context, snapshot) {
                            final _showMoreProvider =
                                Provider.of<ValueNotifier<bool>>(context);
                            return Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  comment.content,
                                  style: style,
                                  maxLines: _showMoreProvider.value
                                      ? comment.content.length ~/ 20
                                      : 3,
                                  overflow: TextOverflow.ellipsis,
                                ),
                                GestureDetector(
                                  onTap: () => _showMoreProvider.value =
                                      !_showMoreProvider.value,
                                  child: Text(
                                    _showMoreProvider.value
                                        ? "Show less".toUpperCase()
                                        : "Show more".toUpperCase(),
                                    style: TextStyle(
                                      color: myHighlightColor,
                                      fontFamily: 'Roboto',
                                      fontSize: 12.sp,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                              ],
                            );
                          });
                    } else {
                      return Text(
                        comment.content,
                        style: style,
                      );
                    }
                  },
                ),
                const SingleCommentFooter(),
                Divider(color: myStrokeColor),
              ],
            ),
          );
        });
  }
}
