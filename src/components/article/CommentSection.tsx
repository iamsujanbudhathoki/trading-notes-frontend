import { MessageCircle, ThumbsUp, Reply } from "lucide-react";
import { useState } from "react";

export function CommentSection() {
    const [comments, setComments] = useState(sampleComments);
    const [newComment, setNewComment] = useState("");

    const handlePostComment = () => {
        if (!newComment.trim()) return;

        const comment = {
            author: "You",
            time: "Just now",
            content: newComment,
            likes: 0
        };

        setComments([comment, ...comments]);
        setNewComment("");
    };

    return (
        <section className="mt-16 pt-16 border-t border-slate-200">
            <div className="mb-12">
                <h2 className="font-sans font-bold text-3xl text-slate-900 mb-2">
                    Discussion
                </h2>
                <p className="text-slate-500">
                    Join the conversation and share your thoughts
                </p>
            </div>

            {/* Comment Form */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold flex-shrink-0">
                        U
                    </div>
                    <div className="flex-1">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Share your insights or ask a question..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none resize-none bg-white"
                            rows={4}
                        />
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-sm text-slate-400">
                                Sign in to post a comment
                            </p>
                            <button
                                onClick={handlePostComment}
                                disabled={!newComment.trim()}
                                className="px-6  py-2.5 bg-[#B85C38] text-white font-bold rounded-lg hover:bg-[#9a4d2f] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                            >
                                Post Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-8">
                {comments.map((comment, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B85C38] to-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                            {comment.author[0]}
                        </div>
                        <div className="flex-1">
                            <div className="bg-white rounded-2xl p-6 border border-slate-100">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-bold text-slate-900">{comment.author}</h4>
                                        <p className="text-sm text-slate-400">{comment.time}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {comment.content}
                                </p>
                                <div className="flex items-center gap-6 mt-4">
                                    <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#B85C38] transition-colors cursor-pointer">
                                        <ThumbsUp className="w-4 h-4" />
                                        {comment.likes}
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#B85C38] transition-colors cursor-pointer">
                                        <Reply className="w-4 h-4" />
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="px-8 py-3 mb-6 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:border-[#B85C38] hover:text-[#B85C38] transition-all cursor-pointer">
                    Load More Comments
                </button>
            </div>
        </section>
    );
}

const sampleComments = [
    {
        author: "Mike Chen",
        time: "2 days ago",
        content: "This is exactly what I needed! The explanation of FVGs was crystal clear. I've been trading for 6 months and this finally clicked for me. Thank you!",
        likes: 24
    },
    {
        author: "Sarah Williams",
        time: "5 days ago",
        content: "Great article. One question though - how do you distinguish between a valid FVG and just a regular gap? Is there a specific criteria you use?",
        likes: 12
    },
    {
        author: "David Kumar",
        time: "1 week ago",
        content: "Applied this strategy on EUR/USD this week and got 3 clean entries. The key is patience and waiting for higher timeframe confirmation.",
        likes: 18
    }
];
