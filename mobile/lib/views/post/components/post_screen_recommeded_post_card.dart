import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:sizer/sizer.dart';

class PostScreenRecommededPostCard extends StatelessWidget {
  const PostScreenRecommededPostCard({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: myPadding / 2),
      height: 120.sp,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Flexible(
            flex: 1,
            child: AuthorWithImage(
              post: post,
              mode: AuthorWithImageMode.light,
              size: AuthorWithImageSize.small,
            ),
          ),
          Expanded(
            flex: 2,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Flexible(
                  flex: 2,
                  child: RichText(
                    maxLines: 3,
                    overflow: TextOverflow.ellipsis,
                    text: TextSpan(
                      text: post.title,
                      style: TextStyle(
                        color: myHeadlineColor,
                        fontSize: 16.sp,
                        fontFamily: 'Roboto',
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
                SizedBox(width: 5.sp),
                Flexible(
                  flex: 1,
                  child: Container(
                    height: 50.sp,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5),
                      image: DecorationImage(
                        fit: BoxFit.fill,
                        image: AssetImage(post.image),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Flexible(
            flex: 1,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  post.datePost +
                      "  •  " +
                      post.timeReading.toString() +
                      " min read",
                  style: TextStyle(
                    color: mySubHeadlineColor.withOpacity(.7),
                    fontFamily: 'Roboto',
                    fontSize: 12.sp,
                    fontWeight: FontWeight.normal,
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    IconButton(
                      onPressed: () {},
                      icon: Icon(
                        Icons.bookmark_add_outlined,
                        color: myButtonColor,
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
                              color: myTextColor,
                            ),
                          ),
                        ),
                        PopupMenuItem(
                          child: Text(
                            "Mute this publication",
                            style: TextStyle(
                              fontSize: 12.sp,
                              fontFamily: 'Roboto',
                              color: myTextColor,
                            ),
                          ),
                        ),
                        PopupMenuItem(
                          child: Text(
                            "Save to reading list",
                            style: TextStyle(
                              fontSize: 12.sp,
                              fontFamily: 'Roboto',
                              color: myTextColor,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
