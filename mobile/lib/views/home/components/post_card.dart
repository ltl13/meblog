import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/small_tag.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class PostCard extends StatelessWidget {
  final Post post;

  const PostCard({
    Key? key,
    required this.post,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ValueNotifier<bool>>(
        create: (context) => ValueNotifier<bool>(false),
        builder: (context, widget) {
          final _isFavorite = Provider.of<ValueNotifier<bool>>(
            context,
            listen: post.isFavorite,
          );
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                post.author,
                style: TextStyle(
                  color: myParagraphColor,
                  fontSize: 12.sp,
                  fontFamily: 'Roboto',
                  fontWeight: FontWeight.normal,
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Flexible(
                    flex: 2,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          post.title,
                          style: TextStyle(
                            color: myHeadlineColor,
                            fontSize: 16.sp,
                            fontFamily: 'Roboto',
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          post.datePost +
                              "  •  " +
                              post.timeReading.toString() +
                              " min read",
                          style: TextStyle(
                            color: mySubHeadlineColor,
                            fontFamily: 'Roboto',
                            fontSize: 12.sp,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(width: 10.sp),
                  Flexible(
                    flex: 1,
                    child: FittedBox(
                      fit: BoxFit.scaleDown,
                      child: Image.asset(post.image),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: post.tags.map((e) => SmallTag(tag: e)).toList(),
                  ),
                  Row(
                    children: [
                      IconButton(
                        onPressed: () {
                          _isFavorite.value = !_isFavorite.value;
                        },
                        icon: Consumer<ValueNotifier<bool>>(
                          builder: (context, isAdded, widget) => Icon(
                            isAdded.value
                                ? Icons.bookmark_added
                                : Icons.bookmark_add,
                            color: isAdded.value
                                ? mySecondaryColor
                                : myTertiaryColor,
                          ),
                        ),
                      ),
                      PopupMenuButton(
                        color: myMainColor,
                        itemBuilder: (context) => [
                          PopupMenuItem(
                            child: Text(
                              "Follow this publication",
                              style: TextStyle(
                                fontSize: 12.sp,
                                fontFamily: 'Roboto',
                                color: myParagraphColor,
                              ),
                            ),
                          ),
                          PopupMenuItem(
                            child: Text(
                              "Mute this publication",
                              style: TextStyle(
                                fontSize: 12.sp,
                                fontFamily: 'Roboto',
                                color: myParagraphColor,
                              ),
                            ),
                          ),
                          PopupMenuItem(
                            child: Text(
                              "Save to reading list",
                              style: TextStyle(
                                fontSize: 12.sp,
                                fontFamily: 'Roboto',
                                color: myParagraphColor,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  )
                ],
              ),
            ],
          );
        });
  }
}
