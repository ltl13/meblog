import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/author.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class AuthorCard extends StatelessWidget {
  final Author author;

  const AuthorCard({
    Key? key,
    required this.author,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ValueNotifier<bool>>(
        create: (context) => ValueNotifier<bool>(false),
        builder: (context, snapshot) {
          return Container(
            width: 100.sp,
            height: 220.sp,
            padding: const EdgeInsets.only(
              left: myPadding,
              top: myPadding,
              bottom: myPadding / 2,
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                CircleAvatar(
                  radius: 40.sp,
                  foregroundImage: AssetImage(author.image),
                ),
                RichText(
                  textAlign: TextAlign.center,
                  overflow: TextOverflow.ellipsis,
                  maxLines: 1,
                  text: TextSpan(
                    text: author.name,
                    style: TextStyle(
                      color: myHeadlineColor,
                      fontFamily: 'Roboto',
                      fontWeight: FontWeight.bold,
                      fontSize: 16.sp,
                    ),
                  ),
                ),
                Text(
                  "@${author.username}",
                  style: TextStyle(
                    color: mySubHeadlineColor,
                    fontFamily: 'Roboto',
                    fontWeight: FontWeight.normal,
                    fontSize: 12.sp,
                  ),
                ),
                RichText(
                  overflow: TextOverflow.ellipsis,
                  maxLines: 2,
                  text: TextSpan(
                    text: author.description,
                    style: TextStyle(
                      color: mySubHeadlineColor,
                      fontFamily: 'Roboto',
                      fontWeight: FontWeight.normal,
                      fontSize: 12.sp,
                    ),
                  ),
                ),
                Consumer<ValueNotifier<bool>>(
                  builder: (context, isFollowing, child) => TextButton(
                    onPressed: () => isFollowing.value = !isFollowing.value,
                    style: TextButton.styleFrom(
                      fixedSize: Size(80.sp, 20.sp),
                      backgroundColor:
                          isFollowing.value ? mySecondaryColor : myButtonColor,
                      shape: RoundedRectangleBorder(
                        side: BorderSide(color: myButtonColor, width: 1),
                        borderRadius: BorderRadius.circular(50.sp),
                      ),
                    ),
                    child: Text(
                      isFollowing.value ? "Followed" : "Follow",
                      style: TextStyle(
                        color: myButtonTextColor,
                        fontFamily: 'Roboto',
                        fontSize: 12.sp,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          );
        });
  }
}
